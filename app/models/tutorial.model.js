// What does mongoose.model do?
// What does mongoose.Schema do?
// What object type is Tutorial? => an Object

module.exports = mongoose => {
  const Tutorial = mongoose.model(
    "tutorial",
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean
      },
      { timestamps: true }
    )
  );

  return Tutorial;
};