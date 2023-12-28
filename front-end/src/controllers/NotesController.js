const knex = require("../database/knex");

class NotesController {
  async create(request, response) {
    const { title, description, movie_tags, rating  } = request.body;
    const { user_id } = request.params;

    const [note_id] = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id,
    });

    const movie_tagsString = JSON.stringify(movie_tags)
      .replace(/^\[|\]$/g, "")
      .replace(/"/g, "");
    
    const movie_tagsInsert = {
      note_id,
      user_id,
      name: movie_tagsString
      
    };


    await knex("movie_tags").insert(movie_tagsInsert);

    return response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const movie_note = await knex("movie_notes").where({ id }).first();
    const movie_tags = await knex("tags").where({ note_id: id }).orderBy("name");

    return response.json({
      ...movie_note,
      movie_tags,
    });

  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("movie_notes").where({ id }).delete();
    
    return response.json();

  }

  async index(request, response) {
    const { title, user_id, movie_tags } = request.query;

    let movie_notes;

    if (movie_tags) {
      const filterTags = tags.split(",").map(tag => tag.trim());

      notes = await knex("tags")
      .select([
        "movie_notes.id",
        "movie_notes.title",
        "movie_notes.user_id"
      ])
      .where("movie_notes.user_id", user_id)
      .whereLike("movie_notes.title", `%${title}%`)
      .whereIn("name", filterTags)
      .innerJoin("movie_notes", "notes.id", "movie_tags.note_id")
      .orderBy("movie_notes.title")

    } else {
      movie_notes = await knex("movie_notes")
        .where({ user_id })
        .whereLike("title", `%${title}%`)
        .orderBy("title");
    }

    const userTags = await knex("movie_tags").where({ user_id });
    const notesWithTags = notes.map(note => {
      const noteTags = userTags.filter(tag => tag.note_id === note.id);

      return {
        ...movie_notes,
        tags: noteTags
      }
    })

    return response.json(notesWithTags);
  }
}

module.exports = NotesController;
