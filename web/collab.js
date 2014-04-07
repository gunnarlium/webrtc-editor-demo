var collab = {
    initEditors: function (selector) {
        var editorsNodeList = document.querySelectorAll(selector);
        var editors = [];
        for (var i = 0; i < editorsNodeList.length; i++) {
            editors.push(editorsNodeList[i]);
        }

        return editors;
    },
    registerListeners: function (editors, syncCallback, userId) {
        editors.forEach(function (editor) {
            var editorElement = editor.querySelector('.editor-content');
            editorElement.addEventListener('input', syncCallback);
            editorElement.addEventListener('focus', function () {
                data[editor.dataset.key].locked = userId;
                syncCallback();
            });
            editorElement.addEventListener('blur', function () {
                data[editor.dataset.key].locked = false;
                syncCallback();
            });
        });
    },

    render: function (data, editors) {
        editors.forEach(function (editor) {
            var editorData = data[editor.dataset.key];
            var ownerElement = editor.querySelector('.editor-owner');
            var editorElement = editor.querySelector('.editor-content');
            if (editorData.locked) {
                editorElement.classList.add('locked');
                ownerElement.innerHTML = 'Locked by ' + editorData.locked;
                ownerElement.classList.remove('hidden');
            } else {
                editorElement.classList.remove('locked');
                ownerElement.classList.add('hidden');
            }
            editorElement.innerHTML = editorData.content;
        });
    },

    gatherData: function (data, editors) {
        editors.forEach(function (editor) {
            data[editor.dataset.key].content = editor.querySelector('.editor-content').innerHTML;
        });

        return data;
    },

    sendData: function sendData(data, connections) {
        if (connections.length === 0) {
            console.log('No connections');
            return;
        }

        connections.forEach(function (connection) {
            connection.send(data);
        });
    }
};
