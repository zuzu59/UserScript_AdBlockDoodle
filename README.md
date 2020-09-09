# UserScript_AdBlockDoodle
zf200909.1058

Permet au moyen d'un *UserScript* d'enlever la pub dans http://doodle.com ;-)


# Problématique
Doodle *détecte* si un *adblocker* existe et n'est pas *content*. Par contre si on est un peu plus *subtile* on arrive quand même à supprimer la pub !


# Moyen
On va utiliser la possibilité de pouvoir *s'insérer* juste entre le *site web* et la *sortie* du browser (le DOM).

Pour cela on va utiliser les *UserScripts* avec Tampermonkey.

Afin que notre *adblocker* maison soit *invisible* de Doodle, il faut simplement permettre *d'afficher* la pub mais après toutes les 3 secondes on *l'efface*. Du coup après 3 secondes, il n'y a plus de pub sur la page Doodle !


# Installation

Installer en premier l'extension Tampermonkey sur son browser puis cliquer sur cette URL

https://github.com/zuzu59/UserScript_AdBlockDoodle/raw/master/AdBlockDoodle.user.js

