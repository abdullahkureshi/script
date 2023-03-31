/**
 * @NApiVersion 2.0
 * @NScriptType ClientScript
 * @NModuleScope Public
 */
define(['N/record', 'N/search', 'N/ui/dialog'], function (record, search, dialog) {

  function saveRecord(context) {
    var salesOrder = context.currentRecord;
    var sublist = salesOrder.getLineCount({
      sublistId: 'item'

    });
    var itemNames = [];
    for (var i = 0; i < sublist; i++) {

      var itemsCount = salesOrder.getSublistText({
        sublistId: 'item',
        fieldId: 'item',
        line: i
      });
      itemNames.push(itemsCount);


    }
    dialog.confirm({
      title: 'Confirm Save',
      message: 'The values are: ' + itemNames.join("<br>") + '\nDo you want to save the sales order?'

    }).
    then(function (result) {
      if (!result) {
        salesOrder.setValue({
          fieldId: 'item',
          value: 'Cancelled'
        });
        salesOrder.save();
      }
    });
  }

  return {
    saveRecord: saveRecord
  };
});