import {readFile, writeFile} from 'fs/promises';

export class MessagesRepository{
  async findOne(id: string) {
    const contents = await readFile('./messages.json', 'utf8');
    const message = JSON.parse(contents)

    return message[id]
  }

  async findAll() {
    const contents = await readFile('./messages.json', 'utf8');
    const message = JSON.parse(contents)

    return message
  }

  async create(content: string) {
    const contents = await readFile('./messages.json', 'utf8');
    const messages = JSON.parse(contents)

    // const id = Object.keys(messages).length + 1
    const id = Math.floor(Math.random() * 1000000)
    messages[id] = {id, content}

    await writeFile('./messages.json', JSON.stringify(messages))
  }
}