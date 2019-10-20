# Osm Go! 

### Mapping less frustrating! 

_Osm Go!_ is a **P**rogressive **W**eb **A**pplications for contributing to OpenStreetMap.
Map your environment simply and fast, directly from the app. Keep your eyes wide open and contribute to OSM while on the run.

You can install the PWA from [osmgo.com](https://osmgo.com])
The APK can be found in [the release list of this repository](https://github.com/DoFabien/OsmGo/releases) 

The application is also available as a **T**rusted **W**eb **A**ctivities on [Google Play](https://play.google.com/store/apps/details?id=fr.dogeo.osmgo)

A short user documentation can be found [here](https://dofabien.github.io/OsmGo/).

 <p align="center">
  <img src="https://raw.githubusercontent.com/wiki/DoFabien/OsmGo/assets/map-vt.png?raw=true"/>
  <img src="https://raw.githubusercontent.com/wiki/DoFabien/OsmGo/assets/map-ortho.png?raw=true"/>
  <img src="https://raw.githubusercontent.com/wiki/DoFabien/OsmGo/assets/fiche.png?raw=true"/>
  <img src="https://raw.githubusercontent.com/wiki/DoFabien/OsmGo/assets/map-modif.png?raw=true"/>
  <img src="https://raw.githubusercontent.com/wiki/DoFabien/OsmGo/assets/select-primary-tag-velo.png?raw=true"/>
  <img src="https://raw.githubusercontent.com/wiki/DoFabien/OsmGo/assets/send-data.png"/>
</p>


### Dev
Osm Go! is a _PWA_ application using Ionic 4 and Angular 8. It uses the map rendering engine Mapbox GL JS to display and run the in-app map.

#### Installation 
1) Install npm dependencies globally
```sh
npm install -g ionic
```
2) Clone this repo and install
```sh
https://github.com/DoFabien/OsmGo.git
cd OsmGo
npm install
```
3) Test it in a browser
```sh
ng serve 
```
4) Build (=> ./www)
```sh
ng build --prod 
```

## Contributing
If you want to contribute to Osm Go! and make it better, your help is welcome !

 1. Create a personal fork of the project on Github.
 2. Clone your fork on your local machine
 3. Create a new branch to work on! Branch from develop (feature) or master (hotfix)
 4. Implement your feature and tests
 5. Push your branch to your fork on Github, the remote `origin`.
 6. From your fork open a pull request in the correct branch. 
 
