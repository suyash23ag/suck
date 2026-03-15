exports.handler = async (event) => {
if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: ''
        };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    try {
        const { username } = JSON.parse(event.body);

        const graphqlQuery = {
            query: `
                query userSessionProgress($username: String!) {
                    allQuestionsCount {
                        difficulty
                        count
                    }
                    matchedUser(username: $username) {
                        profile {
                            ranking
                        }
                        submitStats {
                            acSubmissionNum {
                                difficulty
                                count
                                submissions
                            }
                            totalSubmissionNum {
                                difficulty
                                count
                                submissions
                            }
                        }
                    }
                }
            `,
            variables: { username }
        };

        const response = await fetch('https://leetcode.com/graphql/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Referer': 'https://leetcode.com'
            },
            body: JSON.stringify(graphqlQuery)
        });

        const data = await response.json();

        return {
            statusCode: 200,
            headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

    } catch (error) {
        return {
            statusCode: 500,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ error: 'Failed to fetch data from LeetCode' })
        };
    }
};








    

