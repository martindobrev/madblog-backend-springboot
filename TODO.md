# TASKS

* Upgrade Spring Boot to latest version
* Upgrade to Java 17
* Add a Comment entity
  * It should be linked to an article
  * it should have a user id
  * add some test data (see BootstrapSomeArticleData)
* Add the comments to `ArticleDTO` and `ArticlePageDTO`
* Make sure the mapper correctly maps the data (write some additional tests)
* Comments must be loaded only when detailed view of the article is being loaded - `ArticleController.getArticleById(...)`
* When collection of articles is loaded, DO NOT include them into the response
