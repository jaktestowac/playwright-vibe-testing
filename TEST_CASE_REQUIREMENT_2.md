# Test Case for Requirement 2: Event Creation Validation

**Requirement:**
Events must have a title, description, location, and date, and cannot be scheduled in the past.

## Test Case: Create Event with Valid and Invalid Data

### Preconditions:

- User is registered and logged in.

### Steps:

1. Navigate to the event creation page.
2. Attempt to create an event with missing required fields (title, description, location, or date).
   - Expected: The system displays validation errors for each missing field.
3. Attempt to create an event with a title shorter than 3 or longer than 50 characters.
   - Expected: The system displays a validation error for the title length.
4. Attempt to create an event with a description shorter than 10 or longer than 200 characters.
   - Expected: The system displays a validation error for the description length.
5. Attempt to create an event with a location shorter than 3 or longer than 50 characters.
   - Expected: The system displays a validation error for the location length.
6. Attempt to create an event with a date set in the past.
   - Expected: The system displays a validation error indicating the date must be in the future.
7. Attempt to create an event with all valid fields (title, description, location, and a future date).
   - Expected: The event is created successfully and appears in the event list.

### Postconditions:

- Only valid events are created and visible in the system.
- Invalid event creation attempts are rejected with appropriate error messages.
