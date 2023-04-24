function generateDifficultyLevel(currentLevel) {
    const options = [
        { key: 1, value: 'Very Easy', selected: false },
        { key: 2, value: 'Easy', selected: false },
        { key: 3, value: 'Medium(Standard 3x3)', selected: false },
        { key: 4, value: 'Intermediate', selected: false },
        { key: 5, value: 'Expert', selected: false },
        { key: 6, value: 'Hardcore', selected: false },
    ];

    const result = options.map(x => x.key == currentLevel ? { ...x, selected: true } : x);

    return result;
}

module.exports = {
    generateDifficultyLevel,
}