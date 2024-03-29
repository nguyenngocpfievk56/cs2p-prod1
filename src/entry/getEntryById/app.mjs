export const lambdaHandler = async (event, _) => {
    const data = {
        id: 1,
        title: 'PROD1 1 for cs2p_ngocnh',
        content: 'This is the first PROD1 entry',
    };

    const response = {
        data: data
    };
    return response;
};
