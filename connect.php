<?php
    error_reporting(0);
    $FirstName = $_POST['FirstName'];
    $LastName = $_POST['LastName'];
    $Address = $_POST['Address'];
    $Email = $_POST['Email'];
    $Phone = $_POST['Phone'];
    $Location = $_POST['Location'];
    $Project = $_POST['Project'];
    $Flat = $_POST['Flat'];
    $Query = $_POST['Query'];

    $conn = new mysqli('localhost','root','','testdb');
    if($conn->connect_error){
        die('Connection Failed  :'.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into entry_details(FirstName, LastName, Address, Email, Phone, Location, Project, Flat, Query)values(?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssissss",$FirstName, $LastName, $Address, $Email, $Phone, $Location, $Project, $Flat, $Query);
        $stmt->execute();
        echo "Information Saved Successfully...";
        $stmt->close();
        $conn->close();
    }
?>

