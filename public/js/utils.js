var Utils = (function() {
    // 局部变量定义
    var a = 0;

    // 私有方法
    function getTreeData(dataSet) {
        var result = {
            "name": "languages",
            "children": []
        };

        var languages = {};

        // 循环处理子节点
        if (dataSet && dataSet.items) {
            var items = dataSet.items;
            // 先找出涉及语言
            items.forEach(function(item, index) {
                if (typeof languages[item.language] === 'undefined') {
                    languages[item.language] = index;
                }
            });

            // 根据语言进行整理
            for (var language in languages) {
                if (languages === 'null') {
                    languages = 'others';
                }
                // 每种语言的子节点
                var root = {
                    "name": language,
                    "children": []
                };
                // 从全局数据再次查找我们的数据
                items.forEach(function(item, index) {
                    var child = {
                        "name": item.full_name,
                        "watchers_count": item.watchers_count,
                        "forks_count": item.forks_count
                    };

                    if (item.language === language || (item.language === 'null' && language === 'others')) {
                        root.children.push(child);
                    }
                }); 

                result.children.push(root);
            }
        }

        return result;
    }

    // 公共方法
    return {
        settings: function() {},
        init: function() {},
        getTreeData: getTreeDate
    }
}())