mongoose.connect(process.env.DB_URI)
  .then(async () => {
    console.log('Connexion à MonogDB réussie');
    const collection = mongoose.connection.db.collection('projects');
    const documents = await collection.find().toArray();
    res.render('my_projects', { documents });
  }
);