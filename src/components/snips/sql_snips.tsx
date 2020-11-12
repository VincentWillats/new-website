import React, { useState } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { styled } from '../../stitches.config';
import { SnipProps } from '../../pages/code_snips';

export const SQLSnip = ({ codeNumber }: SnipProps) => {
    const [codeList] = useState<String[]>([code01]);
    return (
        <div>
            <Header>PostgreSQL Snippet</Header>
            <Block maxWidth={{ initial: 'default', bp880: 'small' }}>
                <CodeBlock
                    text={codeList[codeNumber]}
                    language={'sql'}
                    showLineNumbers={true}
                    wrapLines={true}
                    theme={dracula}
                />
            </Block>
        </div>
    );
};
const Header = styled('h3', {
    textAlign: 'center',
});

const Block = styled('div', {
    margin: 'auto',
    maxWidth: '65%',

    variants: {
        maxWidth: {
            default: {
                maxWidth: '65%',
            },
            small: {
                maxWidth: '95%',
            },
        },
    },
});

const code01 = ` CREATE TABLE quiz(
   uid UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid (),
   name VARCHAR (255) UNIQUE NOT NULL,
   public Boolean DEFAULT FALSE,
   created_by UUID,
   owned_by UUID,
   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
   last_active_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
   deleted_at TIMESTAMP,
  CONSTRAINT fk_created_by
   	FOREIGN KEY(created_by)
   		REFERENCES users(uid),
  CONSTRAINT fk_owned_by
   	FOREIGN KEY(owned_by)
   		REFERENCES organisations(uid)
);`;
