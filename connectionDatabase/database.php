<?php
try{
    $con = new pdo("mysqli:host=localhost;dbname=aljomoaa;", "root", "");
    $con->setAttribute(PDO::ATRR_ERRMODE, PDO::ERRMODE_EXEPTION);
    $stmt = $con->prepare("SELECT id, firstname, lastname FROM MyGuests");
    $stmt->execute();
    $result->fetchAll(PDO::FETCH_ASSOC);
}
catch(PDOExeption $e){
    echo "conection failed" . $e->grtMessage();
}
print_r($result);
?>