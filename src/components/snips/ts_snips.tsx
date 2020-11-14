import React, { useState } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { styled } from '../../stitches.config';
import { SnipProps } from '../../pages/code_snips';

export const TsSnip = ({ codeNumber }: SnipProps) => {
    const [codeList] = useState<String[]>([code01]);
    return (
        <div>
            <Header>Javascript/Typescript Snippet</Header>
            <Block width={{ initial: 'default', bp880: 'small' }}>
                <CodeBlock
                    text={codeList[codeNumber]}
                    language={'typescript'}
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
    width: '80%',

    variants: {
        width: {
            default: {
                width: '80%',
            },
            small: {
                width: '95%',
            },
        },
    },
});

const code01 = `// Javascript/Typescript API Call
// GetQuiz returns a single quiz with all its questions and answers
// Takes a single param of quiz UID
export const GetQuiz = async (quizUID: string): Promise<QuizQuestionsAndAnswers> => {
	try {
		const response = await fetch(\`/api/quizzes/getquiz?id=\${quizUID}\`, {
			method: "GET",
        })
        
		if (response.status !== 200) {
			const responJson: ApiError = await response.json()
			throw new Error(responJson.friendlyError)
        }
        
        let quiz: QuizQuestionsAndAnswers = await response.json()
        
		return quiz
	} catch (err) {
		throw new Error(err.message)
	}
}`;
