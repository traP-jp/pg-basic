#!/bin/bash

generate_folder_name() {
    chars='abcdef0123456789'
    folder_name=$(cat /dev/urandom | LC_CTYPE=C tr -dc "$chars" | fold -w 10 | head -n 1)
    echo "$folder_name"
}

run_directory="$(pwd)/hello-shell"

# Create 20 folders
for ((i=1; i<=20; i++)); do
    cd "$run_directory"

    # Generate folder name
    folder_name=$(generate_folder_name)
    # Create folder
    mkdir "$folder_name"
    echo "Created folder: $folder_name"
    cd "$folder_name"
    for ((j=1; j<=20; j++)); do
        f2_name=$(generate_folder_name)
        mkdir "$f2_name"
        echo "Created folder: $folder_name/$f2_name"
    done
    
done