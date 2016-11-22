var app = angular.module("madModule");

app.factory("formEntryStore", function() {
  var madlibs;
  return {
    setFormEntries: function(formEntries) {
      madlibs = formEntries;
    },
    getFormEntries: function() {
      return madlibs;
    }
  };
});
