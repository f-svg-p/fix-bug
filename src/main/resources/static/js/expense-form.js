(function () {
    const container = document.getElementById('detail-rows');
    const addButton = document.getElementById('add-detail-row');
    const template = document.getElementById('detail-row-template');
    if (!container || !addButton || !template) {
        return;
    }

    addButton.addEventListener('click', function () {
        const clone = template.content.firstElementChild.cloneNode(true);
        container.appendChild(clone);
        reindexRows();
    });

    container.addEventListener('click', function (event) {
        const button = event.target.closest('.remove-detail-row');
        if (!button) {
            return;
        }

        button.closest('.detail-row').remove();
        reindexRows();
    });

    function reindexRows() {
        container.querySelectorAll('.detail-row').forEach(function (row, index) {
            row.querySelectorAll('[name]').forEach(function (input) {
                input.name = input.name.replace(/details\[\d+]/, 'details[' + index + ']');
            });
        });
    }
})();
