##Setup
```
git submodule init && git submodule update
```

##Usage:
```
AutoForm.getFormState('yourFormId');

AutoForm.isFormClean('yourFormId');

AutoForm.isFormDirty('yourFormId');

AutoForm.isFormPristine('yourFormId');


//helpers boolean
afHasFormState 'clean' //inside autoform
afHasFormState 'clean' formId='yourFormId' //outside

// returns the state name
afFormState //inside autoform
afFormState formId='yourFormId' //outside


```