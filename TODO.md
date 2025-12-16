# Fix Console Errors - Missing Images

## Problem
- 404 errors for `default-dept.jpg` and `stats-bg.jpg` in assets folder
- Images referenced in components but files don't exist

## Solution
- Update fallback image paths to use existing images from public/assets/
- For departments: use 'assets/tour1.jpg' as fallback
- For statistics: use 'assets/static.jpg' as background

## Files to Edit
- src/app/core/features/Faculty-of-tourism/Pages/Home/departments/departments.component.html
- src/app/core/features/Faculty-of-tourism/Pages/Home/statistics/statistics.component.html

## Steps
1. [x] Update departments component fallback image
2. [x] Update statistics component background image
3. [x] Test that errors are resolved
