<script>
    const input = document.getElementById('yesNoInput');
    input.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        if (value !== 'yes' && value !== 'no' && value !== '') {
            this.value = '';
        }
    });
</script>
