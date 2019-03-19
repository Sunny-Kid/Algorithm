function reverse (string) {
  if (string === '') return ''
  return reverse(string.slice(1)) + string.charAt(0)
}
