# Proyecto de Curso: Biblioteca Comunitaria Digital

## 1. Datos del proyecto

**Nombre del proyecto:** Biblioteca Comunitaria Digital  
**Tipo de proyecto:** Aplicación web  
**Modalidad:** Proyecto  
**Estado:** Planificación y prototipado  
**Frontend:** HTML, CSS y JavaScript  
**Backend:** Python  
**Enfoque metodológico:** Desarrollo asistido por IA (Dev IA)

---

## 2. Descripción general

Biblioteca Comunitaria Digital es una aplicación web pensada para una biblioteca física.  
Su finalidad es ofrecer un catálogo digital para consulta de libros, permitir la gestión administrativa del inventario y registrar préstamos.

El proyecto se desarrollará en dos etapas:

1. **Etapa de prototipo:** se utilizará una API pública de libros para poblar y probar la interfaz sin depender todavía de una base de datos propia.
2. **Etapa de implementación real:** se cargará el inventario real de la biblioteca desde un archivo Excel para construir una base de datos propia y operar con datos reales.

---

## 3. Problema a resolver

La biblioteca dispone actualmente de información almacenada en un archivo Excel, lo que dificulta la consulta rápida del catálogo, el control del inventario y el registro ordenado de préstamos.

Se requiere una solución digital que permita:

- Consultar libros desde una interfaz web.
- Gestionar altas de libros.
- Administrar inventario.
- Registrar préstamos y devoluciones.
- Migrar el inventario existente desde Excel hacia una base de datos estructurada.

---

## 4. Objetivo general

Desarrollar una aplicación web para una biblioteca física que permita consultar el catálogo digital, administrar libros e inventario, registrar préstamos y preparar la migración desde un archivo Excel a una base de datos propia.

---

## 5. Objetivos específicos

- Diseñar un prototipo funcional usando una API pública de libros.
- Construir una interfaz de consulta en JavaScript.
- Desarrollar un backend en Python para la lógica del sistema.
- Diseñar una base de datos para libros, préstamos y administración.
- Permitir la carga manual de nuevos libros mediante formularios.
- Implementar una carga masiva inicial desde Excel.
- Preparar el sistema para pasar del prototipo a un entorno real de biblioteca.
- Usar herramientas de IA para planificar, generar código base, depurar y documentar.

---

## 6. Alcance

### Incluye
- Catálogo digital de consulta.
- Búsqueda de libros.
- Vista de disponibilidad.
- Formulario para agregar libros.
- Gestión básica de inventario.
- Registro de préstamos y devoluciones.
- Prototipo conectado a API pública.
- Importación posterior desde Excel.
- Separación entre frontend y backend.

### No incluye en la primera versión
- Aplicación móvil nativa.
- Integración con sistemas externos de bibliotecas.
- Módulo avanzado de multas.
- Recomendador inteligente integrado en producción.
- Despliegue en infraestructura institucional final.

---

## 7. Usuarios del sistema

### Usuario lector
Puede:
- Consultar el catálogo.
- Buscar libros por título, autor o tema.
- Ver información general del libro.
- Revisar disponibilidad.

### Administrador
Puede:
- Agregar libros.
- Editar registros.
- Actualizar inventario.
- Registrar préstamos.
- Registrar devoluciones.
- Cargar el inventario inicial desde Excel.

---

## 8. Estrategia de desarrollo

El proyecto se implementará en dos fases principales para reducir complejidad y acelerar el prototipado.

### Fase 1: Prototipo con API pública
En esta fase la aplicación funcionará con datos externos de prueba.  
El objetivo es construir y validar la experiencia de usuario, la interfaz y la lógica básica de búsqueda y visualización.

Características:
- El frontend consultará una API pública de libros.
- Se mostrarán resultados en tarjetas o listado.
- Se validará la navegación y el diseño de la interfaz.
- Se podrá simular la estructura final del catálogo.

### Fase 2: Implementación real con base de datos propia
En esta fase el sistema dejará de depender de datos públicos y trabajará con el inventario real de la biblioteca.

Características:
- Carga inicial del inventario desde Excel.
- Procesamiento del archivo con Python.
- Inserción de datos en base de datos local o institucional.
- Gestión real de inventario y préstamos.
- Persistencia de información propia.

---

## 9. Arquitectura propuesta

La aplicación se dividirá en dos capas principales:

### Frontend
Desarrollado con:
- HTML
- CSS
- JavaScript

Responsabilidades:
- Mostrar el catálogo.
- Renderizar resultados de búsqueda.
- Mostrar formularios.
- Enviar solicitudes al backend.
- Permitir interacción de usuario y administrador.

### Backend
Desarrollado con Python.

Responsabilidades:
- Procesar solicitudes del frontend.
- Conectarse con la base de datos.
- Validar información.
- Gestionar libros, inventario y préstamos.
- Procesar la carga del archivo Excel.
- Exponer endpoints para el frontend.

---

## 10. Tecnologías propuestas

### Frontend
- HTML
- CSS
- JavaScript
- Fetch API para comunicación con el backend

### Backend
- Python
- FastAPI o Flask

### Base de datos
- SQLite para desarrollo inicial
- PostgreSQL como mejora futura

### Procesamiento de Excel
- pandas
- openpyxl

### Herramientas de apoyo
- Visual Studio Code
- Git y GitHub
- Google AI Studio

---

## 11. Uso de APIs en el proyecto

### API pública para el prototipo
Durante la fase de prototipo se usará una API pública de libros para probar la interfaz y la lógica de consulta sin depender de una base de datos propia.

Posibles usos:
- Búsqueda por título.
- Obtención de autor.
- Portada o imagen referencial.
- Año o edición cuando esté disponible.

### Base de datos propia en la fase real
Cuando se implemente la solución en la biblioteca:
- se dejará de depender de la API pública para el catálogo principal,
- se cargará el Excel institucional,
- y se construirá una base de datos propia con los libros reales.

---

## 12. Uso de IA en el proyecto

El proyecto seguirá una perspectiva Dev IA, utilizando inteligencia artificial como apoyo de desarrollo.

La IA se utilizará para:
- definir alcance y funcionalidades,
- generar borradores de código,
- estructurar componentes del frontend,
- proponer modelos de base de datos,
- generar scripts de importación desde Excel,
- apoyar la documentación,
- detectar y corregir errores,
- acelerar el proceso de aprendizaje y prototipado.

La IA no reemplaza la validación técnica del proyecto.  
Las decisiones finales, pruebas e integración serán responsabilidad del estudiante.

---

## 13. Uso de Google AI Studio

Google AI Studio se utilizará como herramienta de apoyo para el desarrollo del proyecto.

Aplicaciones dentro del proyecto:
- redactar prompts técnicos,
- generar estructuras iniciales de frontend y backend,
- analizar muestras del Excel,
- proponer endpoints y modelos,
- corregir errores de implementación,
- mejorar documentación técnica.

Su uso en este proyecto será complementario.  
El sistema principal estará construido con JavaScript en el frontend y Python en el backend.

---

## 14. Requerimientos funcionales

- El sistema debe mostrar un catálogo de libros.
- El sistema debe permitir buscar libros.
- El sistema debe permitir mostrar resultados obtenidos desde una API pública en el prototipo.
- El sistema debe permitir agregar nuevos libros mediante formulario.
- El sistema debe permitir importar libros desde un archivo Excel.
- El sistema debe almacenar libros en una base de datos propia.
- El sistema debe permitir registrar préstamos.
- El sistema debe permitir registrar devoluciones.
- El sistema debe actualizar la disponibilidad de cada libro.
- El sistema debe permitir funciones administrativas sobre inventario.

---

## 15. Requerimientos no funcionales

- La interfaz debe ser clara e intuitiva.
- El sistema debe ser responsive.
- El código debe organizarse por módulos.
- La solución debe poder ejecutarse en entorno local.
- El proyecto debe ser mantenible y escalable.
- La importación desde Excel debe contemplar validación básica de datos.
- El sistema debe poder migrar del prototipo a la operación real sin rehacer toda la aplicación.

---

## 16. Modelo funcional del sistema

### Módulo de catálogo
- Visualización de libros.
- Búsqueda por texto.
- Consulta de disponibilidad.

### Módulo de administración
- Alta de libros.
- Edición de registros.
- Actualización de stock.
- Registro de préstamos.
- Registro de devoluciones.

### Módulo de importación
- Carga de archivo Excel.
- Lectura de columnas.
- Validación de datos.
- Inserción en base de datos.

---

## 17. Flujo de funcionamiento esperado

### Escenario 1: prototipo
1. El usuario ingresa al catálogo.
2. El frontend consulta una API pública.
3. La aplicación muestra libros de prueba.
4. Se valida diseño, búsqueda y experiencia general.

### Escenario 2: implementación real
1. El administrador accede al sistema.
2. Carga el archivo Excel con el inventario real.
3. El backend procesa el archivo.
4. Los libros se guardan en la base de datos.
5. El frontend deja de consultar datos de prueba y consume la API del backend propio.
6. La biblioteca opera sobre su inventario real.

---

## 18. Estructura inicial del proyecto

```bash
biblioteca-app/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── services/
│       └── api.js
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── routes/
│   │   ├── libros.py
│   │   ├── prestamos.py
│   │   └── importacion.py
│   └── services/
│       └── excel_importer.py
│
├── data/
│   ├── inventario_prueba.xlsx
│   └── inventario_real.xlsx
│
├── docs/
│   └── proyecto.md
│
├── requirements.txt
└── README.md
