/**
 *@NApiVersion 2.x
 *@NScriptType Suitelet
 */
 define(['N/record', 'N/ui/serverWidget'],
 /**
  * @param{record} record
  * @param{serverWidget} serverWidget
  */
 function(record, serverWidget) {
 
     function onRequest(context) {
     var request = context.request;
     var response = context.response;
     var form = serverWidget.createForm({
         title : 'Student Information Suitelet Form'
     });
     var nameField = form.addField({
        id : 'custpage_std_name',
        type: serverWidget.FieldType.TEXT,
        label: 'Name'
  });
  var DepartmentField = form.addField({
     id : 'custpage_std_department',
     type: serverWidget.FieldType.TEXT,
     label: 'Department'
 }); 
 var cityField = form.addField({
     id : 'custpage_std_city',
     type: serverWidget.FieldType.TEXT,
     label: 'City'
 }); 
 var EmailField = form.addField({
     id : 'custpage_std_email',
     type: serverWidget.FieldType.TEXT,
     label: 'Email'
 }); 
 var cellnoField = form.addField({
     id : 'custpage_std_cellno',
     type: serverWidget.FieldType.INTEGER,
     label: 'Cell No'
 }); 
 form.addSubmitButton();
 response.writePage(form);
          Namme = request.parameters.custpage_std_name;
          log.debug("name of student", Namme);
          Deppartment = request.parameters.custpage_std_department;
          log.debug("department name", Deppartment);
          citty = request.parameters.custpage_std_city;
          Emmail = request.parameters.custpage_std_email;
          cellnoo = request.parameters.custpage_std_cellno;
          var transferdatatoform = record.create({
             type: 'customrecord_studentinformation_'
           });
           transferdatatoform.setValue("custrecord_name_", Namme);
           transferdatatoform.setValue("custrecord_department_", Deppartment );
           transferdatatoform.setValue("custrecord_city_", citty);
           transferdatatoform.setValue("custrecord_email_", Emmail );
           transferdatatoform.setValue("custrecord_cellno_", cellnoo );
           transferdatatoform.save();
     }
 
     return {
         onRequest: onRequest
     }
 });
 