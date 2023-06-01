function generatePlatformOptions(currentMethod) {
    const options = [
        { key: '', label: '-------', selected: false },
        { key: 'PC', label: 'PC', selected: false },
        { key: 'Nintendo', label: 'Nintendo', selected: false },
        { key: 'PS4', label: 'PS4', selected: false },
        { key: 'PS5', label: 'PS5', selected: false },
        { key: 'XBOX', label: 'XBOX', selected: false },
    ];

    const result = options.map(x => x.key == currentMethod ? { ...x, selected: true } : x);

    return result;
}

module.exports = {
    generatePlatformOptions,
};