export const lambdaHandler = async (event, _) => {
    const data = [
        {
            id: 1,
            title: 'Base 1',
            content: 'This is the first Base entry',
        },
        {
            id: 2,
            title: 'Base 2',
            content: 'This is the second Base entry',
        }
    ];

    const response = {
        data: data
    };
    return response;
};
