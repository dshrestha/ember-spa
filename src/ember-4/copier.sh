#!/bin/bash

for number in $(seq 1 2 500)
do
  mkdir app/components/render-test-$number
  mkdir app/components/repeat-number-$number

  cp -a app/components/render-test app/components/render-test-$number
  cp -a app/components/repeat-number app/components/repeat-number-$number
done
