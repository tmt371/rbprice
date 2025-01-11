function xQuo() {
    // Create a floating window
    const floatingWindow = window.open('', 'xQuoWindow', 'width=1000,height=1600');

    // Define the HTML content directly in the JavaScript
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>EZ Blinds & Shutters Quotation</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
            }
    
            .section {
                width: 20cm;
                margin: 0 auto;
            }
    
            .header {
                background-color: #F2F2F2;
                padding: 15px;
                display: flex;
                justify-content: space-between;
                height: 300px;
                /* 設定高度為 100px */
            }
    
            .header h1 {
                color: #E97132;
                margin: 0;
            }
    
            .company-info {
                text-align: right;
            }
    
            .middle-container {
                width: 20cm;
                height: 25cm;
                border: 1px solid black;
                margin: 20px auto;
            }
    
            .bottom-section {
                display: flex;
                justify-content: space-between;
            }
    
            .payment-method {
                width: 5cm;
                height: 4cm;
                border: 1px solid black;
                margin-bottom: 15px;
                margin-left: 10px;
            }
    
            .payment-method th {
                height: 1cm;
            }
    
            .total-summary {
                width: 5cm;
                margin-bottom: 10px;
                margin-right: 5px;
            }
    
            .total-summary table {
                width: 100%;
                border-collapse: collapse;
            }
    
            .total-summary td {
                border: 1px solid black;
                padding: 5px;
            }
    
            .total-summary table td:first-child {
                width: 2cm;
                /* 設定第一欄的寬度為1cm */
            }
    
            .total-summary table td:nth-child(2) {
                width: 3cm;
                /* 設定第二欄的寬度為3cm */
            }
    
            .date-input {
                border: none;
                border-bottom: 1px solid #333;
                padding: 5px 0;
                width: 100px;
            }
        </style>
    </head>
    
    <body>
        <div class="section header">
            <div>
                <h1>Quotation</h1>
                <p>Ref: <span contenteditable="true"></span></p>
                <p>Customer: <span contenteditable="true"></span></p>
                <p>Address: <span contenteditable="true"></span></p>
                <p>Phone: <span contenteditable="true"></span></p>
                <p>Email: <span contenteditable="true"></span></p>
                <strong>Issue Date:</strong> <input type="text" class="date-input" id="issueDate">
                <strong>Due Date:</strong> <input type="text" class="date-input" id="dueDateDisplay">
            </div>
            <div class="company-info">
                <h2>EZ Blinds & Shutters</h2>
                <p>ABN: 52 62 74 20 777</p>
                <p>Address: U11/ 271 Wells Rd, Chelsea Heights</p>
                <p>Phone: 0466 965 168</p>
                <p>email:ezblinds ＠ ezbns.com.au</p>
                <p>Web: www.ezbns.com.au</p>
            </div>
        </div>
    
        <div class="section middle-container">
            <!-- Content for the middle section can be added here -->
        </div>
    
        <div class="section bottom-section">
            <div class="payment-method">
                <table>
                    <tr>
                        <th>Payment Method</th>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                </table>
            </div>
            <div class="total-summary">
                <table>
                    <tr>
                        <td>Sub Total:</td>
                        <td contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td>Delivery:</td>
                        <td contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td>Installation:</td>
                        <td contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td>Extra:</td>
                        <td contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td>GST:</td>
                        <td contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td>Discount:</td>
                        <td contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td>Deposit:</td>
                        <td contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td>Balance:</td>
                        <td contenteditable="true"></td>
                    </tr>
                </table>
            </div>
        </div>
    
        <script>
            document.addEventListener("DOMContentLoaded", function () {
                function formatDate(date) {
                    var day = date.getDate();
                    var month = date.getMonth() + 1;
                    var year = date.getFullYear();
                    return \`\${day < 10 ? '0' + day : day}/\${month < 10 ? '0' + month : month}/\${year}\`;
                }
    
                var issueDateInput = document.getElementById("issueDate");
                var dueDateDisplay = document.getElementById("dueDateDisplay");
    
                var currentDate = new Date();
                issueDateInput.value = formatDate(currentDate);
    
                var dueDate = new Date(currentDate);
                dueDate.setDate(dueDate.getDate() + 14);
                dueDateDisplay.value = formatDate(dueDate);
    
                issueDateInput.addEventListener("input", function () {
                    var parts = issueDateInput.value.split('/');
                    if (parts.length === 3) {
                        var day = parseInt(parts[0], 10);
                        var month = parseInt(parts[1], 10) - 1;
                        var year = parseInt(parts[2], 10);
                        var newIssueDate = new Date(year, month, day);
                        if (!isNaN(newIssueDate)) {
                            var newDueDate = new Date(newIssueDate);
                            newDueDate.setDate(newDueDate.getDate() + 14);
                            dueDateDisplay.value = formatDate(newDueDate);
                        }
                    }
                });
            });
        </script>
    </body>
    
    </html>
    `;

    // Set the HTML content of the floating window
    floatingWindow.document.open();
    floatingWindow.document.write(htmlContent);
    floatingWindow.document.close();

    // Function to copy the datatable and its styles, and perform additional tasks
    function processDataTable() {
        // Get the middle-container element from the floating window (xquowindow)
        const floatingMiddleContainer = floatingWindow.document.querySelector('.section.middle-container');

        // Get the table-container element from the original page (index.html)
        const originalTableContainer = document.querySelector('.table-container');

        if (floatingMiddleContainer && originalTableContainer) {
            // Clone the datatable element from the original page
            const clonedDatatable = originalTableContainer.querySelector('#dataTable').cloneNode(true);

            // Get all styles from the original page
            const styles = Array.from(document.styleSheets)
                .filter(styleSheet => {
                    try {
                        return styleSheet.cssRules && styleSheet.cssRules.length > 0;
                    } catch (e) {
                        console.log('Cannot access styleSheet', e);
                        return false;
                    }
                })
                .map(styleSheet => {
                    return Array.from(styleSheet.cssRules)
                        .map(rule => rule.cssText)
                        .join('\n');
                })
                .join('\n');

            // Create a style element and add it to the floating window
            const styleElement = floatingWindow.document.createElement('style');
            styleElement.textContent = styles;
            floatingWindow.document.head.appendChild(styleElement);

            // Add specific styles for the table
            const tableStyles = `
                #dataTable {
                    border-collapse: collapse;
                    width: 100%;
                }
                #dataTable th, #dataTable td {
                    border: 1px solid black;
                    padding: 8px;
                    text-align: left;
                }
                #dataTable th {
                    background-color: #f2f2f2;
                }
            `;
            const tableStyleElement = floatingWindow.document.createElement('style');
            tableStyleElement.textContent = tableStyles;
            floatingWindow.document.head.appendChild(tableStyleElement);

            // Clear existing content
            floatingMiddleContainer.innerHTML = '';
            // Append the cloned datatable to the floating window's middle-container
            floatingMiddleContainer.appendChild(clonedDatatable);

            // Get the table in the floating window
            const table = floatingWindow.document.querySelector('#dataTable');

            // 1. Change column names
            table.rows[0].cells[1].textContent = 'Name';
            table.rows[0].cells[2].textContent = 'Color';

            // 2. Process BO, BO2, and SN columns
            processColumn(table, 3, 'BO');
            processColumn(table, 4, 'BO2');
            processColumn(table, 5, 'SN');

            // 3. Modify table structure
            table.rows[0].cells[3].textContent = 'Location';
            table.rows[0].cells[3].style.width = '15px';
            for (let i = 1; i < table.rows.length; i++) {
                table.rows[i].cells[3].textContent = '';
            }

            // Remove columns: BO2, SN, NA, Discnt
            const columnsToRemove = [15, 13, 5, 4]; // Indices adjusted as we remove columns
            columnsToRemove.forEach(colIndex => {
                for (let i = 0; i < table.rows.length; i++) {
                    table.rows[i].deleteCell(colIndex);
                }
            });

            console.log('Datatable processed successfully');
        } else {
            console.error('Required elements not found. Retrying...');
            setTimeout(processDataTable, 100); // Retry after 100ms
        }
    }

    // Function to process a specific column
    function processColumn(table, colIndex, columnName) {
        for (let i = 1; i < table.rows.length; i++) {
            if (table.rows[i].cells[colIndex].querySelector('.round-button.active')) {
                const name = promptForInput(`Input the name and color of the ${columnName}, Do not leave it blank`, 'Name');
                const color = promptForInput(`Input the name and color of the ${columnName}, Do not leave it blank`, 'Color');

                if (name && color) {
                    for (let j = 1; j < table.rows.length; j++) {
                        if (table.rows[j].cells[colIndex].querySelector('.round-button.active')) {
                            table.rows[j].cells[1].textContent = name;
                            table.rows[j].cells[2].textContent = color;
                        }
                    }
                }
                break; // Exit after processing the first occurrence
            }
        }
    }

    // Function to prompt for input
    function promptForInput(message, field) {
        let input;
        do {
            input = floatingWindow.prompt(`${message}\n${field}:`);
        } while (input === '');
        return input;
    }

    // Start the process after a short delay
    setTimeout(processDataTable, 500);
}

// Export the xQuo function
//export { xQuo };

