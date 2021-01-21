M = python back/manage.py

# Available commands
all:
	@. ./scripts/makelist.sh

#
# For dev:
djdev:		# DjangoApp
	@$(M) runserver

djmm:		#
	@$(M) makemigrations

djmg:		#
	@$(M) migrate

djtest:		#
	@$(M) test

djaddsa:	# Create test sa user
	@$(M) dev_create_sa

djlint:		#
	@pycodestyle --exclude='*/migrations/*' back

vdev:		# VueApp
	@cd front/; npm run serve; cd ..
