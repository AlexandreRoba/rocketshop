Products = new Mongo.Collection("Products");

Products.featured = function () {
    var featuredSkus = ["honeymoon-mars", "johnny-liftoff", "one-way-reentry"];
    return Products.find({sku:{$in:featuredSkus}});
};
