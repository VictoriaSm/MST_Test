<script>
    import './styles.scss';

    export default {
        functional: true,
        name: 'Contaniner',
        render(createElement, context) {
            const data = context.data || {},
                appendedClasses = [
                    'Container',
                ];

            if (data.hasOwnProperty('class')) {
                if (Array.isArray(data.class)) {
                    data.class = data.class.concat(appendedClasses);
                } else {
                    appendedClasses.push(data.class);
                    data.class = appendedClasses;
                }
            } else {
                data.class = appendedClasses;
            }

            return createElement('div', data, context.children);
        }
    }
</script>