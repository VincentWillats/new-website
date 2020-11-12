import React, { useState } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { SnipProps } from '../../pages/code_snips';
import { styled } from '../../stitches.config';

export const GoSnip = ({ codeNumber }: SnipProps) => {
    const [codeList] = useState<String[]>([code01, code02, code03, code04]);
    return (
        <div>
            <Header>Go Snippet</Header>
            <Block width={{ initial: 'default', bp880: 'small' }}>
                <CodeBlock
                    text={codeList[codeNumber]}
                    language={'go'}
                    showLineNumbers={true}
                    wrapLines={true}
                    theme={dracula}
                />
            </Block>
        </div>
    );
};

const Block = styled('div', {
    margin: 'auto',
    width: '65%',

    variants: {
        width: {
            default: {
                width: '65%',
            },
            small: {
                width: '95%',
            },
        },
    },
});

const Header = styled('h3', {
    textAlign: 'center',
});

const code01 = `// StartServe starts the rest api server
func (s *Container) StartServe(port string) error {
	err := s.DB.DbConnect() // connect db
	if err != nil {
		return err
	}
        // Router
        r := chi.NewRouter()
        // Middleware logger
        r.Use(middleware.Logger)
    
	r.Post("/api/v1/coffeshop/search", WithError(s.GetCoffeeShopSearchResultsHandler))
	r.Get("/api/v1/image", WithError(s.GetImageHandler))
	r.Get("/api/v1/coffeeshop/reviews", WithError(s.GetCoffeeShopReviewsHandler))

	fmt.Println("Started Server on port :", port)

	// Server
	err = http.ListenAndServe(":"+port, r)
	if err != nil {
		return err
	}
	return nil
}
`;

const code02 = `// WithError is our middleware error handling, wraps all api handlers
func WithError(next HandlerFuncWithError) http.HandlerFunc {
	fn := func(w http.ResponseWriter, r *http.Request) {
		code, err := next(w, r)
		// If error
		if err != nil {
			customerErr, ok := err.(*Error) // convert to customer error type
			if !ok {
				panic("Can't convert err to customer err!")
			}
			fmt.Println(customerErr.DevError)
			json, err := json.Marshal(err) // convert error to json
			if err != nil {
				panic("Can't marshall error to json")
			}
			http.Error(w, string(json), code) // Send the json error obj and status code
			return
		}
		w.WriteHeader(code)
		return
	}
	return fn
}
`;

const code03 = `// GetCoffeeShopSearchResultsHandler handles a request to search and return coffeeshops
func (s *Container) GetCoffeeShopSearchResultsHandler(w http.ResponseWriter, req *http.Request) (int, error) {
	searchParms := &types.CoffeeShopSearchParams{}

	err := json.NewDecoder(req.Body).Decode(searchParms) // decode body into search param struct
	if err != nil {
		return http.StatusBadRequest, NewError("Invalid format.", err.Error())
	}

	returnedShops, err := s.DB.GetCoffeeShopSearchResults(searchParms) // Pass search params to func to get search results
	if err != nil {
		return http.StatusInternalServerError, NewError("Failed to get shops.", err.Error())
	}

	err = json.NewEncoder(w).Encode(returnedShops) // encode and return results as json
	if err != nil {
		return http.StatusBadRequest, NewError("Failed to get shops.", err.Error())
	}
	return http.StatusOK, nil
}`;

const code04 = `// GetShopRatings gets coffeshop ratings
func (db *Database) GetShopRatings(shop *CoffeeShop) error {
	query := \`SELECT 	COALESCE(round(avg(coffee)::numeric, 2), -1) as coffee,
						COALESCE(round(avg(price)::numeric, 2), -1) as price,
						COALESCE(round(avg(location)::numeric, 2), -1) as location,
						COALESCE(round(avg(comfort)::numeric, 2), -1) as comfort,
						COALESCE(round(avg(atmosphere)::numeric, 2), -1) as atmosphere,
						COALESCE(round(avg(food)::numeric, 2), -1) as food,
						COALESCE(round(avg(customerservice)::numeric, 2), -1) as customerservice,
						COALESCE(round(avg(overall)::numeric, 2), -1) as overall
				FROM coffeeshopratings 
				WHERE shop_uid = $1\`
	err := db.DB.Get(&shop.Ratings, query, shop.ShopUID)
	if err != nil {
		return err
	}
	return nil
}`;
