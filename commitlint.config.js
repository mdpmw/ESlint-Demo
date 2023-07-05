module.exports = {
    extends: ['@commitlint/config-conventional'],
    //Here are our customized rules
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'bug',
                'feat', // new feature
                'fix', // fix bugs
                'docs', // documentation
                'style',
                'refactor', // It's not about adding new features or modifying bug code changes
                'test',
                'chore', // changes in the construction process or auxiliary tools
                'revert', // revoke previous commit
                'merge',
            ],
        ],
    },
}
