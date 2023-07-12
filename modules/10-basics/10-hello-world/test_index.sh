test_hello_world() {
  echo
  echo
  . index.sh || exit 1
  result=`. index.sh`
  assert_equals "Hello, World!" "$result"
  echo
  echo
}
