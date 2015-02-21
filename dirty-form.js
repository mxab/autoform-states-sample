Books = new Mongo.Collection("books");
Books.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  author: {
    type: String,
    label: "Author"
  },
  copies: {
    type: Number,
    label: "Number of copies",
    min: 0
  },
  lastCheckedOut: {
    type: Date,
    label: "Last date this book was checked out",
    optional: true
  },
  summary: {
    type: String,
    label: "Brief summary",
    optional: true,
    max: 1000
  }
}));

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("bookId", null);

  AutoForm.addHooks("updateBookForm", {
    after: {
      update : function(){
        Session.set("bookId", null);
      }
    }
  });

  Template.updateBookForm.events({

    "click .js-edit"  : function(e,t){
      Session.set("bookId",$(e.currentTarget).data("id"));
    }
  });

  Template.updateBookForm.helpers({
    book: function () {
      return Books.findOne(Session.get("bookId"));
    },
    books: function () {
      return Books.find();
    }
  });


}
if (Meteor.isServer) {
  Meteor.startup(function () {
    if (!Books.findOne("sample")) {
      Books.insert({
        _id: "sample",
        title: "The clean form",
        author: "Senor Autoformos",
        copies: 4,
        lastCheckedOut: new Date(),
        summary: "Lorem ipsum"
      })
    }
  })
}