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

vdev:		# VueApp
	@cd front/; npm run serve; cd ..
