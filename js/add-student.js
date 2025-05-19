// Handle "Other" condition checkbox
const otherConditionCheckbox = document.getElementById('other_condition');
const otherConditionDetails = document.querySelector('.other-condition-details');

otherConditionCheckbox.addEventListener('change', function() {
    otherConditionDetails.style.display = this.checked ? 'flex' : 'none';
    if (this.checked) {
        // Focus the input field when checkbox is checked
        document.getElementById('other_condition_details').focus();
    } else {
        // Clear the field when unchecked
        document.getElementById('other_condition_details').value = '';
    }
});

// Initialize - hide other condition details if not checked
otherConditionDetails.style.display = otherConditionCheckbox.checked ? 'flex' : 'none';