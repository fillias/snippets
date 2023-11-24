#najdi mkv v current folder, vyhod z nich audio stopu 2 a smaz stare

folder=$(pwd); file_list=($(find . -type f -name "*mkv*"))

for i in *mkv; do mkvmerge -o `basename "$i-preveden" mkv`.mkv --atracks 2 "$i" ; done


for file in "${file_list[@]}"; do echo "$file"; done



folder=$(pwd); file_list=($(find "$folder" -type f -name "*mkv*")); for i in *mkv; do mkvmerge -o `basename "$i-preveden" mkv`.mkv --atracks 2 "$i" ; done; for file in "${file_list[@]}"; do rm "$file"; done







# remove spaces in files and subfolders
find -name "* *" -print0 | sort -rz |  while read -d $'\0' f; do mv -v "$f" "$(dirname "$f")/$(basename "${f// /_}")"; done