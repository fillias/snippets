<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# wordpress site vraci 500 po migraci pluginem "Migrate Guru – Site Migration \& Cloning". Jak postupovat? Mam ssh pristup

Po migraci přes Migrate Guru je nejrychlejší postup: zkontrolovat `error_log`, dočasně vypnout pluginy přejmenováním `wp-content/plugins`, ověřit `.htaccess`, a pokud je potřeba, zapnout debug log ve `wp-config.php`. To jsou nejčastější příčiny 500 po migraci WordPressu, a fungují i když máš jen SSH přístup.[^1_1][^1_2][^1_3]

## Doporučený postup

1. **Najdi konkrétní chybu v logu.**
Přes SSH hledej webserver/PHP logy a WordPress debug log, protože 500 je jen obecný symptom a log obvykle ukáže skutečný problém.[^1_2][^1_3]
Typicky zkus:

```bash
tail -n 100 /path/to/error.log
tail -n 100 /path/to/wordpress/wp-content/debug.log
```

2. **Zapni WordPress debug log.**
V `wp-config.php` nastav:

```php
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_DISPLAY', false );
define( 'WP_DEBUG_LOG', true );
```

WordPress pak zapisuje chyby do `wp-content/debug.log` bez toho, aby je zobrazoval návštěvníkům.[^1_3][^1_4]
3. **Dočasně vypni všechny pluginy.**
Přejmenuj složku `wp-content/plugins` třeba na `plugins_old`; tím WordPress pluginy nenačte a hned uvidíš, jestli je viník některý z nich.[^1_5][^1_2]
Přes SSH:

```bash
mv wp-content/plugins wp-content/plugins_old
```

Když web naskočí, vrať složku zpět a zapínej pluginy po jednom.
4. **Zkontroluj `.htaccess`.**
Po migraci může být pravidly poškozený nebo nekompatibilní. Přesuň ho stranou a nech WordPress vygenerovat nový; pokud se pak web opraví, byl problém v rewrite pravidlech.[^1_6][^1_1]
Přes SSH:

```bash
mv .htaccess .htaccess.bak
```

Pak v administraci ulož **Nastavení → Trvalé odkazy**, nebo ručně vrať standardní WordPress pravidla.[^1_6]
5. **Ověř oprávnění souborů.**
Po migraci bývají někdy špatně nastavené práva souborů a adresářů; obvyklý základ je `755` pro adresáře a `644` pro soubory.[^1_6]
Přes SSH:

```bash
find /path/to/wordpress -type d -exec chmod 755 {} \;
find /path/to/wordpress -type f -exec chmod 644 {} \;
```


## Co bývá po migraci nejčastěji

- **Chybný plugin nebo security plugin** po změně prostředí.[^1_7][^1_5]
- **Poškozený `.htaccess`** nebo nekompatibilní rewrite pravidla.[^1_1][^1_6]
- **Nízký memory limit / PHP limit**, který se po migraci liší od původního hostingu.[^1_8][^1_1]
- **Špatná oprávnění souborů** po přenosu.[^1_6]


## Rychlá záchranná varianta

Když potřebuješ web zprovoznit co nejrychleji, jdi v tomto pořadí:

1. přejmenuj `wp-content/plugins`,
2. přejmenuj `.htaccess`,
3. zkontroluj log,
4. případně zvedni memory limit ve `wp-config.php` nebo hostingové PHP konfiguraci.[^1_8][^1_3][^1_1]

## Praktický start

Začni tímto:

```bash
mv wp-content/plugins wp-content/plugins_old
mv .htaccess .htaccess.bak
```

Když se web rozběhne, víš, že problém byl v pluginu nebo rewrite pravidlech; pak už jen vracíš změny postupně.[^1_5][^1_6]

Pokud chceš, můžu ti hned sepsat přesný SSH checklist pro tvůj konkrétní stack: Apache vs Nginx, ať máš příkazy krok za krokem.
<span style="display:none">[^1_10][^1_11][^1_12][^1_13][^1_14][^1_15][^1_16][^1_17][^1_18][^1_19][^1_20][^1_21][^1_22][^1_23][^1_24][^1_25][^1_26][^1_27][^1_28][^1_29][^1_9]</span>

<div align="center">⁂</div>

[^1_1]: https://www.youstable.com/cs/blog/500-internal-server-error-in-wordpress/

[^1_2]: https://webouky.cz/webovy-slovnik-internal-server-error

[^1_3]: https://learn.wordpress.org/lesson/the-built-in-wordpress-debugging-options/

[^1_4]: https://help.dreamhost.com/hc/en-us/articles/360029327771-Enabling-the-WordPress-Debug-log

[^1_5]: https://webcentauri.com/fix-wordpress-error/troubleshooting-500-error-in-wordpress-after-migration/

[^1_6]: https://wp-umbrella.com/troubleshooting/how-to-fix-500-internal-server-error-on-wordpress/

[^1_7]: https://www.volcengine.com/article/678132

[^1_8]: https://prograshi.com/wordpress/how-to-resolve-500-errors-after-site-migration/

[^1_9]: https://www.interserver.net/tips/kb/migrate-or-clone-a-wordpress-site-using-migrateguru/

[^1_10]: https://www.digitalocean.com/community/questions/failed-to-migrate-wordpress-using-migrate-guru

[^1_11]: https://maxsico.cz/jak-opravit-chybu-500-internal-server-error-ve-wordpressu/

[^1_12]: https://www.youtube.com/watch?v=7hTxa-RdPwU

[^1_13]: https://www.youtube.com/watch?v=l4oynLx8NNo

[^1_14]: https://coumiwp.cz/chyby/

[^1_15]: https://www.youtube.com/watch?v=Im3Hlcs_-mk

[^1_16]: https://www.youtube.com/watch?v=Qmft9Y7d9mE

[^1_17]: https://www.youtube.com/watch?v=7NGMnbHUdgQ

[^1_18]: https://maxiplace.ru/blog/wordpress/9-samyh-rasprostranennyh-oshibok-wordpress/

[^1_19]: https://www.wplama.cz/wordpress-chyba-500-internal-server-error/

[^1_20]: https://webberzone.com/migrate-wordpress-website-ssh/

[^1_21]: https://www.youtube.com/watch?v=IIga4hhypV4

[^1_22]: https://www.liquidweb.com/wordpress/errors/500-internal-server-error/

[^1_23]: https://burst-statistics.com/how-to-enable-debugging-in-wordpress/

[^1_24]: https://wordpress.org/plugins/migrate-guru/

[^1_25]: https://inventivehq.com/blog/wordpress-500-error-fix-complete-troubleshooting-guide

[^1_26]: https://wordpress.org/support/plugin/migrate-guru/page/5/

[^1_27]: https://developer.wordpress.com/docs/troubleshooting/wp-debug/

[^1_28]: https://techubber.blogspot.com/2018/02/how-to-resolve-500-internal-server-wordpress-local-live-server.html

[^1_29]: https://deliciousbrains.com/wp-migrate-db-pro/doc/500-internal-server-errors/


---

```
# <q>tail -n 100 /path/to/error.log</q> kde najdu log. Pouzivam bitnami aws lightsail
```

Na Bitnami AWS Lightsail pro WordPress jsou logy v těchto cestách:

- **Apache error log**:

```bash
/opt/bitnami/apache/logs/error_log
# nebo v některých verzích:
/opt/bitnami/apache2/logs/error_log
```

- **Apache access log**:

```bash
/opt/bitnami/apache/logs/access_log
```

- **PHP/PHP-FPM log**:

```bash
/opt/bitnami/php/logs/php-fpm.log
```

- **WordPress debug log** (pokud máš zapnutý `WP_DEBUG_LOG`):

```bash
/opt/bitnami/apps/wordpress/wp-content/debug.log
```


Přes SSH zkus:

```bash
tail -n 100 /opt/bitnami/apache/logs/error_log
tail -n 100 /opt/bitnami/apache2/logs/error_log   # pokud první cesta neexistuje
tail -n 100 /opt/bitnami/php/logs/php-fpm.log
tail -n 100 /opt/bitnami/apps/wordpress/wp-content/debug.log
```

Pokud se ti některá cesta neexistuje, můžeš si najít, kde přesně jsou logy, pomocí:

```bash
sudo find /opt/bitnami -name "error_log" -o -name "error.log"
```

Po migraci přes Migrate Guru se nejčastěji ukáže v Apache error_log nebo PHP-FPM logu chyba typu:

- syntax error v `.htaccess` / konfiguraci
- chyby pluginu (např. deklarační chyby, memory limit)
- špatnáána cesta nebo oprávnění.[^2_1][^2_2][^2_3]

Můžeš mi sem poslat 10–20 řádků z `error_log` (pravdě) a já ti pomůžu přesně interpretovat, co konkrétně je příčina 500.
<span style="display:none">[^2_10][^2_4][^2_5][^2_6][^2_7][^2_8][^2_9]</span>

<div align="center">⁂</div>

[^2_1]: https://precisefuture.com/en/tutorial/wordpress-logs-in-aws-lightsail/

[^2_2]: https://qiita.com/raindogs/items/b0d2175ad0ffc3bc8487

[^2_3]: https://docs.bitnami.com/aws/infrastructure/lamp/troubleshooting/debug-errors-apache/

[^2_4]: https://zenn.dev/vanshi/scraps/084c6ef6eb28be

[^2_5]: https://stackoverflow.com/questions/46136968/amazon-lightsail-bitnami-lamp-server-website-hosting-sudo-service-apache2-rest/46143945

[^2_6]: https://docs.bitnami.com/aws/infrastructure/ruby/troubleshooting/debug-errors-nginx/

[^2_7]: https://precisefuture.com/tutorial/logs-de-wordpress-en-aws-lightsail/

[^2_8]: https://stackoverflow.com/questions/73222851/bitnami-errors-on-wordpress-lightsail-aws

[^2_9]: https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-viewing-database-logs-and-history.html

[^2_10]: https://community.letsencrypt.org/t/amazon-lightsail-bitnami-error-400-and-403-when-trying-to-add-ssl/232993


---

# jaka je default cesta k wordpress?

Default cesta k WordPressu na Bitnami AWS Lightsail je:

```bash
/opt/bitnami/apps/wordpress/htdocs
```

To je **root tvého webu** (document root), kde jsou:

- `index.php`
- `wp-config.php`
- `.htaccess`
- `wp-content/` (plugins, themes, uploads)
- `wp-admin/`, `wp-includes/`

Přes SSH teda můžeš přímo:

```bash
cd /opt/bitnami/apps/wordpress/htdocs
```

A zkontrolovat logy:

```bash
tail -n 100 /opt/bitnami/apache/logs/error_log
tail -n 100 /opt/bitnami/apps/wordpress/htdocs/wp-content/debug.log
```

Pokud řešíš 500 po migraci, první kroky jsou:

```bash
cd /opt/bitnami/apps/wordpress/htdocs

# dočasně vypni pluginy
mv wp-content/plugins wp-content/plugins_old

# dočasně přejmenuj .htaccess
mv .htaccess .htaccess.bak
```

Pokud chceš, můžeš mi poslat 10–20 řádků z `error_log` a já ti přímo řeknu, co konkrétně je problém.
<span style="display:none">[^3_1][^3_10][^3_2][^3_3][^3_4][^3_5][^3_6][^3_7][^3_8][^3_9]</span>

<div align="center">⁂</div>

[^3_1]: https://docs.aws.amazon.com/lightsail/latest/userguide/log-in-to-your-bitnami-application-running-on-amazon-lightsail.html

[^3_2]: https://docs.aws.amazon.com/en_us/lightsail/latest/userguide/bitnami-tutorials.html

[^3_3]: https://tonyteaches.tech/aws-lightsail-wordpress/

[^3_4]: https://qiita.com/raindogs/items/b0d2175ad0ffc3bc8487

[^3_5]: https://www.reddit.com/r/aws/comments/apxvdd/how_to_access_folder_containing_wordpress_on_your/

[^3_6]: https://www.youtube.com/watch?v=jYVbLlH8CmY

[^3_7]: https://stackoverflow.com/questions/67615846/how-to-configure-aws-lightsail-wordpress-instance-to-map-as-example-com-blog

[^3_8]: https://docs.bitnami.com/aws/faq/get-started/find-credentials/

[^3_9]: https://builder.aws.com/content/2iCmOXrZQHombofuxrFxAfa0YTE/securing-wordpress-on-lightsail-hardening-wordpress

[^3_10]: https://docs.bitnami.com/aws/get-started-lightsail/


---

# opt/bitnami neexistuje

Pokud `/opt/bitnami` neexistuje, máš pravděpodobně **novější verzi Bitnami stacku** na Lightsail, kde je cesta jiná.

Na novějších Lightsail instancích s WordPressem je conventionálně:

```bash
/home/bitnami/apps/wordpress/htdocs
```

Pac nebo:

```bash
/opt/bitnami/wordpress
```

Zkus tyto cesty:

```bash
# Varianta 1: home/bitnami
cd /home/bitnami/apps/wordpress/htdocs

# Varianta 2: opt/bitnami/wordpress
cd /opt/bitnami/wordpress

# Pokud ani jedna neexistuje, najdi to:
find /home -type d -name wordpress 2>/dev/null
find /opt -type d -name wordpress 2>/dev/null
```

A직ou najdeš root tvého webu, tam najdeš:

- `index.php`
- `wp-config.php`
- `.htaccess`
- `wp-content/`

Logy na novějších instancích bývají často:

```bash
# Apache error log
/home/bitnami/apache/logs/error_log

# nebo pod opt/bitnami
/opt/bitnami/apache/logs/error_log
/opt/bitnami/apache2/logs/error_log

# PHP-FPM
/home/bitnami/php/logs/php-fpm.log

# WordPress debug log
/home/bitnami/apps/wordpress/htdocs/wp-content/debug.log
# nebo
/opt/bitnami/wordpress/wp-content/debug.log
```

Rychlý test, kde to je:

```bash
ls -la /home/bitnami/apps/wordpress/htdocs
ls -la /opt/bitnami/wordpress
```

Která z těchto cesty se ti dá a obsahuje `wp-config.php`?
<span style="display:none">[^4_1][^4_10][^4_2][^4_3][^4_4][^4_5][^4_6][^4_7][^4_8][^4_9]</span>

<div align="center">⁂</div>

[^4_1]: https://www.reddit.com/r/aws/comments/pqqez0/access_root_directory_of_wordpress_on_lightsail/

[^4_2]: https://www.chrisjmendez.com/2017/05/04/bitnami-wordpress-cheatsheet/

[^4_3]: https://www.reddit.com/r/aws/comments/apxvdd/how_to_access_folder_containing_wordpress_on_your/

[^4_4]: https://dtaxi.tistory.com/entry/아마존-라이트세일-루트-패스

[^4_5]: https://tonyteaches.tech/aws-lightsail-wordpress/

[^4_6]: https://analytics-note.xyz/aws/lightsail-directory-2023/

[^4_7]: https://www.webhostingforbeginners.net/overview-of-bitnami-wordpress-system-changes-in-lightsail-blueprint-aug-2021/

[^4_8]: https://qiita.com/raindogs/items/b0d2175ad0ffc3bc8487

[^4_9]: https://lightsail.info/directory-wpcontent/

[^4_10]: https://stackoverflow.com/questions/46252129/how-to-host-a-static-webpage-on-amazon-lightsail-with-a-wordpress-instance


---

# admin@ip-172-26-6-12:~\$ find /home -type d -name wordpress 2>/dev/null

admin@ip-172-26-6-12:~\$ find /opt -type d -name wordpress 2>/dev/null
/opt/aws/wordpress
admin@ip-172-26-6-12:~\$ ls /opt/aws/wordpress/
LICENSE.txt  NOTICE.txt  credentials.log  install_wordpress.sh

Pocházíš, že to není Bitnami, ale **nový AWS-native WordPress blueprint na Lightsail** (Bitnami se deprecateduje). `/opt/aws/wordpress` je jen instalační skript, ne tvůj web.

Zkus tento postup, abys našel skutečný root:

```bash
# Najdi document root Apache
sudo grep -r "DocumentRoot" /etc/apache2/ 2>/dev/null

# nebo pro Nginx
sudo grep -r "root" /etc/nginx/ 2>/dev/null

# Najdi kde je index.php
sudo find / -name index.php -path "*wp-admin*" 2>/dev/null | head -5

# Najdi kde je wp-config.php
sudo find / -name wp-config.php 2>/dev/null | head -5
```

Často je to na těchto cestách na novém AWS-native blueprintu:

```bash
/var/www/html
/var/www/wordpress
/home/bitnami/wordpress
```

Zkus rychle:

```bash
ls /var/www/html/wp-config.php
ls /var/www/wordpress/wp-config.php
ls /home/bitnami/wordpress/wp-config.php
```

Která cesta obsahuje `wp-config.php`?
<span style="display:none">[^5_1][^5_10][^5_2][^5_3][^5_4][^5_5][^5_6][^5_7][^5_8][^5_9]</span>

<div align="center">⁂</div>

[^5_1]: https://docs.aws.amazon.com/ja_jp/lightsail/latest/userguide/migrate-your-wordpress-blog-from-bitnami-to-amazon-lightsail.html

[^5_2]: https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-quick-start-guide-wordpress.html

[^5_3]: https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-wordpress-bitnami.html

[^5_4]: https://www.youtube.com/watch?v=jYVbLlH8CmY

[^5_5]: https://docs.bitnami.com/aws/get-started-lightsail/

[^5_6]: https://awsnewbies.com/lightsail-wordpress-bitnami/

[^5_7]: https://www.wpbeginner.com/pl/wp-tutorials/how-to-install-wordpress-on-amazon-web-services/

[^5_8]: https://medium.com/@shubham.jadhav_18910/creating-and-setting-up-your-wordpress-site-on-amazon-lightsail-step-by-step-guide-for-beginner-2e68ce7d3401

[^5_9]: https://dev.to/aws-builders/2-easy-steps-to-host-wordpress-like-a-magic-on-aws-with-amazon-lightsail-23e2

[^5_10]: https://github.com/awsdocs/amazon-lightsail-developer-guide/blob/master/doc_source/amazon-lightsail-tutorial-launching-and-configuring-wordpress.md


---

# admin@ip-172-26-6-12:~\$ sudo find / -name index.php -path "*wp-admin*" 2>/dev/null | head -5

/var/www/html/wp-admin/network/index.php
/var/www/html/wp-admin/user/index.php
/var/www/html/wp-admin/index.php
admin@ip-172-26-6-12:~\$

Máš to: **WordPress root je `/var/www/html`**.

Tedy:

```bash
cd /var/www/html
```

To je tvůj webroot s:

- `index.php`
- `wp-config.php`
- `.htaccess`
- `wp-content/` (plugins, themes, uploads)


### Logy

Na tomto stacku jsou logy typicky:

```bash
# Apache/Nginx error log
/var/log/apache2/error.log
# nebo
/var/log/nginx/error.log

# PHP-FPM log
/var/log/php-fpm/error.log
# nebo
/var/log/php8.*/php-fpm.log

# WordPress debug log (pokud zapnutý)
/var/www/html/wp-content/debug.log
```

Zkus:

```bash
cd /var/www/html

# error log
tail -n 100 /var/log/apache2/error.log

# nebo pokud je Nginx
tail -n 100 /var/log/nginx/error.log

# PHP-FPM
tail -n 100 /var/log/php-fpm/error.log

# WordPress debug (pokud zapnut)
tail -n 100 /var/www/html/wp-content/debug.log
```


### Rychlá záchrana pro 500 po migraci

```bash
cd /var/www/html

# vypni pluginy
mv wp-content/plugins wp-content/plugins_old

# přejmenuj .htaccess
mv .htaccess .htaccess.bak
```

Když se web opraví, problém je v pluginu nebo rewrite pravidlech.

Pošli mi 10–20 řádků z `error.log` (Apache/Nginx/PHP-FPM), a já ti přesně řeknu, co je příčina 500.
<span style="display:none">[^6_1][^6_10][^6_2][^6_3][^6_4][^6_5][^6_6][^6_7][^6_8][^6_9]</span>

<div align="center">⁂</div>

[^6_1]: https://wpseek.com/source/wp/latest/wp-admin/index.php.source.html

[^6_2]: https://cloud.tencent.com/developer/ask/sof/77468/answer/102358434

[^6_3]: https://stackoverflow.com/questions/47341224/ive-just-installed-manually-wordpress-but-index-php-is-not-showing

[^6_4]: https://github.com/JoaoArtur/Admin-Page-Finder/blob/master/index.php

[^6_5]: https://ja.stackoverflow.com/questions/74338/wordpress-apache-ルーティングがおかしい

[^6_6]: https://gist.github.com/Jakiboy/2f971fdfda31c6d25795737175e62efa

[^6_7]: https://www.developpez.net/forums/d2165639/php/edi-cms-outils-scripts-api/wordpress/configurer-permaliens-suite-installation-manuelle-wp-ubuntu/

[^6_8]: https://github.com/WordPress/WordPress/blob/master/wp-admin/index.php

[^6_9]: https://www.hostney.com/blog/learning-center/wordpress-index-php-and-wp-admin-files-what-they-do

[^6_10]: https://raw.githubusercontent.com/orwagodfather/My-WordLISTs/main/php.txt


---

# [Thu Jun 11 11:05:58.126896 2026] [php:error] [pid 14328:tid 14328] [client 45.93.45.246:49187] PHP Fatal error:  Array and string offset access syntax with curly braces is no longer supported in /var/www/html/wp-includes/script-loader.php on line 706

Hned to je: **tvůj WordPress je příliš starý pro PHP 8+** (pravděpodobně PHP 8.1/8.2).

Chyba:

```
Array and string offset access syntax with curly braces is no longer supported
in /var/www/html/wp-includes/script-loader.php on line 706
```

Je v **core WordPressu** (`wp-includes/script-loader.php`), což znamená:

- Používáš **starou verzi WordPressu** (< 6.0), která ještě má `{}` syntaxe pro přístup do array/string
- Tato syntaxe byla v PHP 7.4 deprecated a v **PHP 8+ odstraněna** jako fatal error[^7_1][^7_2][^7_3]


### Řešení

Máš dvě možnosti:

***

## 1. Rychlé: Zvedni WordPress na novou verze (doporučeno)

Po migraci Migrate Guru často zůstane starý WordPress. Musíš ho aktualizovat:

```bash
cd /var/www/html

# 1. Zapiš si aktuální verze
cat wp-includes/version.php | grep '$wp_version'

# 2. Zakompaktuj celý WordPresstool (via CLI nebo manuálně)
# Pokud máš WP-CLI:
wp core download --locale=en_US

# Pokud ne, ručně stáhni novější WordPress z wordpress.org a nahraď core:
# (přesněji: nahraď pouze wp-includes, wp-admin, a index.php, wp-login.php ...)
```

Ale jednodušší:

- Přihlas se do **WordPress admin** (pokud se dá), a dej:
    - **Přehled → Aktualizace → Aktualizovat WordPress**
- Pokud se admin nevejde, zkus:
    - **Dočasně zvednout PHP 7.4** (viz varianta 2)
    - Přihlásit se a aktualizovat WordPress
    - Pak vrátit PHP 8+

***

## 2. Rychlá dočasná záchrana: Zvedni PHP na 7.4

Pokud nemůžeš hned aktualizovat WordPress, zvedni PHP na verze 7.4, kde je to ještě jen deprecated, ne fatal:

V **AWS Lightsail konzole**:

1. Jdi na svůj instance
2. Settings → PHP version
3. Zvol **PHP 7.4**
4. Save \& restart Apache

Pak se web znovu načte a můžeš aktualizovat WordPress.

***

## 3. Ruční oprava (neideální, ale rychle fungující)

Pokud se **ANI admin nevejde** a nemůžeš zvednout PHP, můžeš ručně opravit `script-loader.php`:

```bash
cd /var/www/html/wp-includes

# Edituj řádek 706
nano script-loader.php
```

Najdi něco jako:

```php
$someVar{$offset}
// nebo
$someString{$i}
```

A nahraď:

```php
$someVar[$offset]
// nebo
$someString[$i]
```

Tedy: **nahraď `{}` za `[]`** na řádku 706 a kdekdek v tomto souboru, kde se to objevuje.[^7_2][^7_3][^7_4]

Ale to je **dočasné**, protože core se při aktualizaci zase přepíše.

***

### Co udělej jako první

Rada:

1. Zkus zvednout **PHP na 7.4** v Lightsail konzole (rychle, bez práci s kódem).
2. Přihlas se do admin.
3. Aktualizuj **WordPress na nejnovější verze**.
4. Pak vrať **PHP 8+**.

Pokud chceš, můžu ti napsat přesný postup pro aktualizaci WordPressu manuálně (přes SCp/SSH), pokud admin nejede.
<span style="display:none">[^7_10][^7_5][^7_6][^7_7][^7_8][^7_9]</span>

<div align="center">⁂</div>

[^7_1]: https://support.cpanel.net/hc/en-us/articles/360055102734-PHP-Deprecated-Array-and-string-offset-access-syntax-with-curly-braces-is-deprecated

[^7_2]: https://stackoverflow.com/questions/59158548/array-and-string-offset-access-syntax-with-curly-braces-is-deprecated

[^7_3]: https://help.scriptcase.net/portal/en/kb/articles/fatal-error-array-and-string-offset-in-security-module

[^7_4]: https://www.youtube.com/watch?v=oYDrdX7ddpo

[^7_5]: https://ja.wordpress.org/support/topic/script-loader-phpの書き換えについて-2/

[^7_6]: https://www.domainindia.com/login/knowledgebase/470/Resolving-the-Array-and-String-Offset-Access-Syntax-with-Curly-Braces-Error-in-WooCommerce.html

[^7_7]: https://github.com/woocommerce/woocommerce/issues/53734

[^7_8]: https://www.facebook.com/groups/wpexplained/posts/1613052445791487/

[^7_9]: https://wordpress.org/support/topic/array-and-string-offset-access-syntax-with-curly-braces-is-no-longer-supported-2/

[^7_10]: https://github.com/squizlabs/PHP_CodeSniffer/issues/3590


---

# admin@ip-172-26-6-12:/var/www/html\$ cat wp-includes/version.php | grep '\$wp_version'

* @global string \$wp_version
\$wp_version = '5.1.19';

Máš **WordPress 5.1.19** – to je extrémně stará verze (z roku 2019), která **nefunguje s PHP 8+**.

Problém:

- WordPress 5.1 používá `{}` syntaxe pro přístup do array, která je v PHP 8 odstraněna
- PHP 8.1 podporuje ještě WordPress 5.2+, ale 5.1 je už příliš staré[^8_1][^8_2]


## Postup: Aktualizuj WordPress na nejnovější verze

### 1. Zálohuj si web (důležité)

```bash
cd /var/www/html

# Záloha souborů
cp -r /var/www/html /var/www/html-backup

# Záloha databáze (potřebujes DB credentials)
grep DB_NAME wp-config.php
grep DB_USER wp-config.php
grep DB_PASSWORD wp-config.php

# Export databáze
mysqldump -u DB_USER -p DB_NAME > wp-database.sql
```


### 2. Aktualizuj WordPress přes SSH (manuální způsob)

```bash
cd /var/www/html

# 1. Stáhni novou WordPress
wget https://wordpress.org/latest.zip

# 2. Rozbal
unzip latest.zip

# 3. Nahraď core soubory (zachovej wp-content)
rsync -av --exclude='wp-content' wordpress/ /var/www/html/

# 4. Odstran rozbalené složky
rm -rf wordpress latest.zip
```

To je přesně metoda z.[^8_3]

### 3. Aktualizuj databáze

Po nahrazení core souborů:

- Přihlas se do **WordPress admin** (`/wp-admin`)
- WordPress provede automaticky databázový upgrade

Pokud se admin nevejde, zkus:

```bash
cd /var/www/html
wp core update-db
```

Pokud nemáš WP-CLI, stačí se jen přihlásit do admin a WordPress provede upgrade sám.

### 4. Po aktualizaci

- Zkontroluj, že web funguje
-Aktualizuj **pluginy a šablony** v adminu
- Pak můžeš vrátit **PHP 8+**

***

## Alternativní rychlá záchrana: Zvedni PHP na 7.4

Pokud nemůžeš aktualizovat hned:

1. Jdi v **AWS Lightsail konzole** na svůj instance
2. Settings → PHP version → zvol **PHP 7.4**
3. Save \& restart

Pak se web načte a můžeš aktualizovat WordPress přes admin.

***

## Co dělej v pořadí

1. **Zálohuj** (soubory + databáze)
2. **Aktualizuj WordPress** na nejnovější verze (manuálně přes SSH)
3. **Zkontroluj** admin a web
4. **Aktualizuj pluginy a šablony**
5. Vrať **PHP 8+** pokud jsi ho změnil na 7.4

Můžeš mi poslat výstup z `wp core update-db` nebo screenshot z adminu po aktualizaci, a já ti pomůžu, jestli je něco ještě potřeba.
<span style="display:none">[^8_10][^8_11][^8_12][^8_13][^8_14][^8_15][^8_4][^8_5][^8_6][^8_7][^8_8][^8_9]</span>

<div align="center">⁂</div>

[^8_1]: https://www.active24.cz/blog/proc-nepouzivat-stare-verze-php-a-jak-na-aktualizaci

[^8_2]: https://make.wordpress.org/core/handbook/references/php-compatibility-and-wordpress-versions/

[^8_3]: https://zdrojak.cz/clanky/aktualizace-wordpressu-co-se-deje-pod-kapotou-kdyz-kliknete-na-tlacitko/

[^8_4]: https://svetwp.cz/jak-aktualizovat-wordpress/

[^8_5]: https://www.webglobe.cz/poradna/jak-zjistit-a-zmenit-verzi-php

[^8_6]: https://www.mydreams.cz/cz/wiki/10749-jak-se-aktualizuje-redakcni-system-wordpress-podrobny-pruvodce.html

[^8_7]: https://help.wedos.cz/otazka/prechod-na-vyssi-php-s-wordpressem/102066/

[^8_8]: https://jaksedostatdomedii.cz/web/wp/jak-aktualizovat-wordpress/

[^8_9]: https://cs.wordpress.org/support/update-php/

[^8_10]: https://wordpress.org/support/update-php/

[^8_11]: https://www.webglobe.cz/blog/aktualizace-wordpress

[^8_12]: https://www.interval.cz/clanky/wordpress-na-verzi-php-8/

[^8_13]: https://codex.wordpress.org/sk:Aktualizácia_WordPress

[^8_14]: https://www.wplama.cz/je-treba-aktualizovat-php/

[^8_15]: https://365tipu.cz/2022/01/12/tip2074-aktualizace-wordpressu-jak-na-to-mam-nechat-automaticky-aktualizovat-jak-s-pluginy-a-sablonou/


---

# databaze i wordpress updatovan. Nemu ale v UI instalovat pluginy:

Installation failed: Could not create directory.

Chyba **"Installation failed: Could not create directory"** je **špatná oprávnění souborů** nebo **chybějící `wp-content/plugins`** složecku.

## Řešení přes SSH

```bash
cd /var/www/html

# 1. Zkontroluj, že existuje wp-content/plugins
ls -la wp-content/plugins

# Pokud neexistuje, vytvoř ho:
mkdir -p wp-content/plugins
```


### 2. Nastav správná oprávnění

```bash
# Všechny adresáře: 755
sudo find /var/www/html -type d -exec chmod 755 {} \;

# Všechny soubory: 644
sudo find /var/www/html -type f -exec chmod 644 {} \;
```


### 3. Nastav správný owner (webserver user)

Na AWS Lightsail s novým blueprintem je webserver user často **`admin`** nebo **`www-data`**:

```bash
# Zkontroluj, kdo je owner:
ls -la wp-content/

# Správný owner nastav (zkus admin nebo www-data):
sudo chown -R admin:admin /var/www/html/wp-content

# Pokud je www-data:
sudo chown -R www-data:www-data /var/www/html/wp-content
```

Když nevíš, který user je správný, zkus:

```bash
# Podívej se na proces Apache/Nginx:
ps aux | grep apache
ps aux | grep nginx
```

User u procesu je webserver user (např. `admin`, `www-data`, `apache`).

### 4. FS_METHOD v wp-config.php (volitelné)

Přidej do `wp-config.php` (nad `/* That's all, stop editing! */`):

```php
define('FS_METHOD', 'direct');
```

To WordPress přinutí používat přímo filesystem, nikoliv ZIP přes PHP.[^9_1][^9_2]

***

## Po nastavení

1. Vrať se do **WordPress admin**
2. Zkus znovu **instalovat plugin**
3. Pokud jede, zkus více pluginů

***

## Rychlý test

Zkus:

```bash
cd /var/www/html
ls -la wp-content/plugins
sudo chown -R admin:admin wp-content/
sudo find wp-content -type d -exec chmod 755 {} \;
sudo find wp-content -type f -exec chmod 644 {} \;
```

Potom plugin v adminu znovu.

Pokud chceš, můžeš mi poslat výstup z `ls -la wp-content/` a řeknu ti přesně, co nastavit.
<span style="display:none">[^9_10][^9_11][^9_12][^9_13][^9_14][^9_15][^9_3][^9_4][^9_5][^9_6][^9_7][^9_8][^9_9]</span>

<div align="center">⁂</div>

[^9_1]: https://www.youtube.com/watch?v=Yn-Ur_7fmis

[^9_2]: https://christaylordeveloper.co.uk/articles/wordpress-unable-to-create-directory/

[^9_3]: https://www.youtube.com/watch?v=96DJ2bnr3nY

[^9_4]: https://www.youtube.com/watch?v=fC7Mkrmaiq8

[^9_5]: https://www.youtube.com/watch?v=DVbTk7jmWhg

[^9_6]: https://victorleungtw.wordpress.com/2020/04/11/fix-wordpress-plugin-installation-permission-issue/

[^9_7]: https://stackoverflow.com/questions/44670008/installation-failed-could-not-create-directory-i-get-this-error-everytime-i

[^9_8]: https://www.mc-guinness.co.uk/blog/20180519/wordpress-plugin-installation-or-update-error-in-admin-interface-solved/

[^9_9]: https://www.hostinger.com/support/10259847-how-to-fix-could-not-create-directory-error-at-hostinger/

[^9_10]: https://www.facebook.com/groups/DumbSEOQuestions/posts/6894778493889743/

[^9_11]: https://www.bluehost.com/blog/troubleshooting-wordpress-unable-create-directory/

[^9_12]: https://tonjoostudio.com/en/cant-install-plugin-in-wordpress/

[^9_13]: https://www.youtube.com/watch?v=iQAynnnrBnk

[^9_14]: https://www.fastcomet.com/kb/fix-installation-failed-error-in-wordpress

[^9_15]: https://wordpress.org/support/topic/how-fix-directory-permission-issue/


---

# admin@ip-172-26-6-12:/var/www/html\$ ls -la wp-content/

total 48
drwxr-sr-x 11 admin    www-data 4096 Jun 11 11:52 .
drwxr-xr-x  5 admin    www-data 4096 Jun 11 11:43 ..
drwxr-xr-x  2 www-data www-data 4096 Jun 11 09:56 ai1wm-backups
-rw-r--r--  1 admin    www-data   28 Jun 11 09:56 index.php
drwxr-xr-x  3 www-data www-data 4096 Jun 10 12:56 jetpack-waf
drwxr-xr-x  4 www-data www-data 4096 Jun 11 11:52 languages
drwxr-sr-x  2 admin    www-data 4096 Jun 11 11:52 plugins
drwxr-sr-x 26 admin    www-data 4096 Jun 11 09:56 plugins_old
drwxr-sr-x  9 admin    www-data 4096 Jun 11 09:56 themes
drwxr-sr-x  2 admin    www-data 4096 Jun 11 11:53 upgrade
drwxr-sr-x  5 admin    www-data 4096 Jun 11 09:56 uploads
drwxr-xr-x  2 www-data www-data 4096 Jun 11 09:56 wp-performance-score-booster

Vidím problém: **mícháš ownera** (`admin` vs `www-data`).

- `wp-content/` je `admin:www-data`
- `plugins/` je `admin:www-data`
- Ale `jetpack-waf/`, `ai1wm-backups/` jsou `www-data:www-data`

WordPress potřebuje **jednotný owner** pro `wp-content`, a webserver user musí mít **write access**.

## Správné řešení

```bash
cd /var/www/html

# 1. Nastav jednotný owner pro celý wp-content
sudo chown -R admin:admin wp-content/

# 2. Nastav oprávnění
sudo find wp-content -type d -exec chmod 755 {} \;
sudo find wp-content -type f -exec chmod 644 {} \;

# 3. Přidej admin do skupiny www-data (pokud je webserver www-data)
sudo usermod -a -G www-data admin

# 4. Restart Apache
sudo systemctl restart apache2
```

Pokud je webserver user **`admin`** (ne `www-data`), pak:

```bash
sudo chown -R admin:admin wp-content/
```


***

## Rychlá verze

```bash
cd /var/www/html

sudo chown -R admin:admin wp-content/
sudo find wp-content -type d -exec chmod 755 {} \;
sudo find wp-content -type f -exec chmod 644 {} \;
```

Potom v **WordPress admin** znovu zkus instalovat plugin.

***

## Pokud chceš www-data

```bash
sudo chown -R www-data:www-data wp-content/
sudo find wp-content -type d -exec chmod 755 {} \;
sudo find wp-content -type f -exec chmod 644 {} \;
sudo usermod -a -G www-data admin
sudo systemctl restart apache2
```

Kterou variantu chceš použít (`admin` nebo `www-data` jako owner)?
<span style="display:none">[^10_1][^10_10][^10_2][^10_3][^10_4][^10_5][^10_6][^10_7][^10_8][^10_9]</span>

<div align="center">⁂</div>

[^10_1]: https://qastack.com.de/ubuntu/162866/correct-permissions-for-var-www-and-wordpress

[^10_2]: https://weblion303.net/1951

[^10_3]: https://forum.ubuntuusers.de/topic/var/

[^10_4]: https://www.youtube.com/watch?v=dqtInRZFKN8

[^10_5]: https://forums.debian.net/viewtopic.php?t=36572

[^10_6]: https://community.easyengine.io/t/wordpress-permission/13469

[^10_7]: https://github.com/docker-library/wordpress/issues/436

[^10_8]: https://community.hetzner.com/tutorials/wordpress-increase-php-limits/

[^10_9]: https://forum.ubuntu-fr.org/viewtopic.php?id=1991638

[^10_10]: https://stackoverflow.com/questions/18352682/correct-file-permissions-for-wordpress

