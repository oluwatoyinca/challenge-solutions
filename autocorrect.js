const autocorrect = input => { 
    const replacement = 'your client'
    let autocorrected = input.replace(/\byo[u]+\b|\b[u]\b/gi, replacement.toLowerCase())
    return autocorrected
  }