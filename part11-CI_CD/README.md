# Part 11. Continuous Integration / Continuous Delivery systems (CI/CD)

_https://fullstackopen.com/en/part11_

## a. Introduction to CI/CD

Think about a hypothetical situation where we have an application being worked on by a team of about 6 people. The application is in active development and will be released soon.

### Caso hipotético de desarrollo con javascript/typescript

    En este escenario hipotético, imaginemos un equipo de 6 desarrolladores trabajando activamente en una aplicación desarrollada en JavaScript/TypeScript, utilizando tecnologías como React para el frontend y Node.js para el backend. A medida que se acerca la fecha de lanzamiento, varios aspectos clave requieren atención para garantizar un lanzamiento exitoso.

    En primer lugar, la revisión de código y la colaboración son fundamentales. El equipo debe mantener un proceso sólido de revisión de código para detectar errores, mejorar la calidad del código y garantizar la coherencia del estilo, utilizando herramientas como ESLint para el análisis estático de código.

    Las pruebas son esenciales en el desarrollo con JavaScript/TypeScript. Se pueden emplear frameworks como Jest para las pruebas unitarias y Cypress para las pruebas end-to-end. Un enfoque basado en TDD (Desarrollo Guiado por Pruebas) puede ser beneficioso para garantizar la robustez del código.

    En cuanto a la construcción y empaquetado de la aplicación, herramientas como Webpack y Babel son comunes en el ecosistema JavaScript/TypeScript. Estas facilitan la gestión de dependencias, la transpilación del código y la creación de paquetes optimizados para producción.

    Para la configuración de integración continua (CI), herramientas como GitHub Actions, Jenkins, o CircleCI son opciones populares. Estas permiten la automatización de pasos como linting, pruebas y construcción. ESLint y Jest son herramientas comunes para la configuración de linting y pruebas en este contexto.

    Alternativas a Jenkins y GitHub Actions incluyen GitLab CI/CD y Travis CI, que ofrecen opciones basadas en la nube para configurar flujos de trabajo de CI/CD.

    Al decidir entre un entorno autohospedado y uno basado en la nube, se deben considerar factores como la disponibilidad de recursos, la complejidad del proyecto y las preferencias del equipo. Los entornos basados en la nube, como GitHub Actions, proporcionan una configuración sencilla y escalabilidad automática, mientras que soluciones autohospedadas como Jenkins ofrecen un mayor control sobre la infraestructura.

    En resumen, el desarrollo exitoso de aplicaciones en JavaScript/TypeScript con React y/o Node.js requiere atención a la revisión de código, pruebas, construcción y configuración de CI. La elección entre herramientas y entornos dependerá de las necesidades específicas del proyecto y las preferencias del equipo.

### Caso hipotético de desarrollo con python

    En este escenario hipotético, consideremos un equipo de 6 desarrolladores trabajando activamente en una aplicación codificada en Python. A medida que se acerca la fecha de lanzamiento, varios aspectos clave necesitan atención para garantizar un lanzamiento exitoso.

    En primer lugar, la revisión de código y la colaboración son fundamentales. El equipo debe mantener un proceso sólido de revisión de código para detectar errores, mejorar la calidad del código y garantizar el cumplimiento de los estándares de codificación. Reuniones regulares del equipo y canales de comunicación, como Slack o Microsoft Teams, deben estar en marcha para facilitar la colaboración en tiempo real y la resolución de problemas.

    Las pruebas son otro componente crítico. Se deben realizar una combinación de pruebas unitarias, de integración y end-to-end para identificar y corregir cualquier problema. Los marcos de pruebas automatizadas en Python, como pytest o unittest, pueden agilizar este proceso, proporcionando retroalimentación más rápida a los desarrolladores.

    El control de versiones mediante herramientas como Git es indispensable. Permite el seguimiento de cambios, facilita la colaboración y brinda la capacidad de retroceder a versiones anteriores si es necesario. Además, el uso de un pipeline de integración continua/despliegue continuo (CI/CD) asegura que los cambios de código se prueben y desplieguen automáticamente, reduciendo la probabilidad de problemas de integración.

    La documentación a menudo se subestima pero juega un papel crucial, especialmente a medida que el equipo se expande o experimenta cambios. Una documentación clara y completa, que incluya comentarios en el código y un archivo README bien mantenido, ayuda en la incorporación de nuevos miembros del equipo y la resolución de problemas.

    Finalmente, el equipo debe estar preparado para posibles problemas después del lanzamiento. Establecer un ciclo de retroalimentación con los usuarios finales, monitorear el rendimiento de la aplicación y tener un plan para correcciones rápidas de errores o actualizaciones de funciones contribuirá a una experiencia postlanzamiento más fluida.

    En este contexto de desarrollo de la aplicación en Python, es esencial considerar algunos pasos comunes en la configuración de integración continua (CI). Para el linting, testing y building, existen herramientas específicas en el ecosistema de Python.

    - Linting (Análisis estático de código): Herramientas como Flake8 o Pylint son comunes en el ecosistema de Python para mantener la consistencia del estilo de código y atrapar posibles errores antes de la ejecución.

    - Testing (Pruebas): Además de pytest y unittest, herramientas como tox pueden ser utilizadas para automatizar y gestionar entornos virtuales para ejecutar pruebas en diferentes versiones de Python.

    - Building (Compilación): Para construir y empacar la aplicación, se pueden utilizar herramientas como setuptools o poetry, que permiten gestionar dependencias y crear distribuciones de la aplicación.

    Respecto a las alternativas para configurar la CI, además de Jenkins y GitHub Actions, otras opciones populares son GitLab CI/CD, Travis CI, y CircleCI. GitLab CI/CD proporciona integración estrecha con repositorios de GitLab, mientras que Travis CI y CircleCI son opciones en la nube que ofrecen configuración basada en archivos.

    En cuanto a la elección entre un entorno autohospedado y uno basado en la nube, la decisión dependerá de varios factores. Un entorno autohospedado, como Jenkins en un servidor interno, brinda un mayor control sobre la infraestructura, pero requiere mantenimiento y recursos. En contraste, los servicios basados en la nube, como GitHub Actions o Travis CI, ofrecen facilidad de configuración, escalabilidad automática y menores requisitos de administración.

    Para tomar esta decisión, se necesitaría información sobre los recursos disponibles, la complejidad del proyecto, los requisitos de seguridad y la preferencia del equipo. Si el equipo prefiere una solución de bajo mantenimiento y rápida implementación, una opción basada en la nube podría ser más adecuada. Si la empresa tiene requisitos específicos de seguridad o control, un entorno autohospedado podría ser preferible.

    En conclusión, el desarrollo exitoso de aplicaciones requiere una combinación de colaboración efectiva, pruebas exhaustivas, control de versiones, documentación y un enfoque proactivo para el soporte postlanzamiento.
