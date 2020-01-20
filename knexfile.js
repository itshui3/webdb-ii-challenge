// Update with your config settings.

module.exports = {

  development: {
    //driver?
    client: 'sqlite3',
    //db connect
    connection: {
      filename: './data/car-dealer.db3'
    },
    //error prevention with sqlite3
    useNullAsDefault: true,
    //migrations connect config
    migrations: { 
      // migrations step 1: configure a directory as a childprop in knex's config
      // that directs the location of our migrations from root
      directory: './data/migrations'
    }
  },


};
