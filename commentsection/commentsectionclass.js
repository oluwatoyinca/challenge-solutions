class User {
    constructor(name) {
      this._name = name
      this._isLoggedIn = false
      this._lastLoggedInAt = null
    }
    isLoggedIn() {
      return this._isLoggedIn
    }
    getLastLoggedInAt() {
      return this._lastLoggedInAt
    }
    logIn() {
      this._lastLoggedInAt = new Date()
      this._isLoggedIn = true
    }
    logOut() {
      this._isLoggedIn = false
    }
    getName() {
      return this._name
    }
    setName(name) {
      this._name = name
    }
    canEdit(comment) {
      if(comment.getAuthor().getName() === this.getName())
        {
          return true
        }
      return false
    }
    canDelete(comment) {
      return false
    }
  }
  
  class Moderator extends User {
    constructor(name) {
      super(name)
    }
    canDelete(comment) {
      return true
    }
  }
  
  class Admin extends Moderator {
    constructor(name) {
      super(name)
    }
    canEdit(comment) {
      return true
    }
  }
  
  class Comment {
    constructor(author, message, repliedTo = undefined) {
      this._author = author
      this._message = message
      this._repliedTo = repliedTo
      this._createdAt = new Date()
    }
    getMessage() {
      return this._message
    }
    setMessage(message) {
      this._message = message
    }
    getCreatedAt() {
      return this._createdAt
    }
    getAuthor() {
      return this._author
    }
    getRepliedTo() {
      return this._repliedTo
    }
    toString() {
      if(!(this._repliedTo)) {
        return this.getMessage() + " by " + this.getAuthor().getName()
      }
        return this.getMessage() + " by " + this.getAuthor().getName() + " (replied to " + this.getRepliedTo().getAuthor().getName() + ")"
    }
  }  