task<Exec>("frontendBuild") {
    group = "Build"
    description = "Builds React based frontend"

    commandLine("/usr/local/bin/yarn", "build")
}

task<Copy>("frontendCopy") {
    dependsOn("frontendBuild")

    group = "Build"
    description = "Copies React based frontend so that it can be served by Spring Boot app"

    val fromDir = "./build"
    val destDir = "$projectDir/../src/main/resources/static"

    from(fromDir)
    into(destDir)

    doLast {
        println("Copying React files from $fromDir to $destDir")
    }
}

