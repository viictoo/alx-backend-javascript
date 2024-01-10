// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./crud.d.ts" />

import { insertRow, deleteRow, updateRow } from "./crud"

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}
// const variable named newRowID with the type RowID 
// and assign the value the insertRow command.
const newRowID: RowID = insertRow(row);
console.log(`Inserted row with ID: ${newRowID}`);

// const variable named updatedRow with the type RowElement 
// and update row with an age field set to 23
const updatedRow: RowElement = { ...row, age:23 };
 
//  call the updateRow and deleteRow commands.
const updatedRowID: RowID = updateRow(newRowID, updatedRow);
console.log(`Updated row ID: ${updatedRowID}`);

//  call the updateRow and deleteRow commands.
deleteRow(updatedRowID);
console.log(`Deleted row ID: ${updatedRowID}`);