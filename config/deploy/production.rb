set :user, 'deploy'

server 'ellobo.ml', user: fetch(:user), roles: %w[app db web]

set :deploy_to, "/home/#{fetch :user}/#{fetch :application}"

set :branch, :master
set :ssh_options, {
  keys: %w(~/.ssh/id_rsa),
  forward_agent: true
}
