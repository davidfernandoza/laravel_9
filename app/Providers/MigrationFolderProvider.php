<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class MigrationFolderProvider extends ServiceProvider
{
	/**
	 * Register services.
	 *
	 * @return void
	 */
	public function register()
	{
		//
	}

	/**
	 * Bootstrap services.
	 *
	 * @return void
	 */
	public function boot()
	{
		/*
		* Organizar las migraciones por carpetas
		* La carpeta complete no se ejecuta en produccion
		* Las carpetas que estan al mismo nivel que complete se ejecuta en produccion y en desarrollo
		* Se valida con la variable MIGRATION_PRODUCTION
		*/

		if (env('MIGRATION_PRODUCTION', true)) $exceptionsDirectoryComplete = 'complete';
		else $exceptionsDirectoryComplete = '';

		$migrationsPath = database_path('migrations');
		$directories    = glob($migrationsPath . '/*', GLOB_ONLYDIR);
		$subDirectories = [];

		$index = array_search("{$migrationsPath}/{$exceptionsDirectoryComplete}", $directories);
		if (is_numeric($index)) {
			unset($directories[$index]);
		} else {
			$subDirectories = glob($migrationsPath . '/complete/*', GLOB_ONLYDIR);
		}
		$paths = array_merge([$migrationsPath], $directories, $subDirectories);
		$this->loadMigrationsFrom($paths);
	}
}
