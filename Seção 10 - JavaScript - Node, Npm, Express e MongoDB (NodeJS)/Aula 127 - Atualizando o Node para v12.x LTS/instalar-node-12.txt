# REMOVE O NODE ANTERIOR
sudo apt purge --auto-remove nodejs -y
sudo rm /etc/apt/sources.list.d/nodesource.list*

# INSTALA O CURL
sudo apt install curl -y

# BAIXA E INSTALA O NODE 12
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt install nodejs -y
