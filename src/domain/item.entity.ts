import { BusinessException } from "../domain/exceptions/business-exception"

type Params = {
  title: string
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export class Item {
  private _id: string
  private title: string
  private done: boolean

  constructor(params: Params) {
    const { title } = params

    if(title.length < 3)
      throw new BusinessException('Invalid title')

    this._id = uuidv4()

    this.title = title
    this.done = false
  }

  public Do() {
    this.done = true
  }

  public Undo() {
    this.done = false
  }

  get id () {
    return this._id
  }
}
