import { Component } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ISBN';
  isbnForm: FormGroup;

  constructor(private formBuilder: FormBuilder)
  {
    this.isbnForm = this.formBuilder.group({
      isbn: ['']
    });
  }

  checkISBN(isbn)
  {
      // index of ISBN number
      var index = 0;
      // sum up ISBN number
      var sum = 0;
      // check sum of ISBN
      var checksum = 0;
  
      // for each character of ISBN
      for (var i = 0; i < isbn.length; i++)
      {
          // if the character is a number
          if (isbn.charAt(i) >= '0' && isbn.charAt(i) <= '9')
          {
              // 1 - 12 of ISBN
              if (index < 12)
              {
                  // alternative time 1 and 3
                  if (index % 2 == 0)
                  {
                      sum += parseInt(isbn.charAt(i));
                  }
                  else
                  {
                      sum += parseInt(isbn.charAt(i)) * 3;
                  }
              }
              // checksum of ISBN
              else
              {
                  checksum = parseInt(isbn.charAt(i));
              }
              index++;
          }
          // if the character is ' ' or '-'
          else if (isbn.charAt(i) == ' ' || isbn.charAt(i) == '-')
          {
          }
          // the invalidate character
          else
          {
              return false;
          }
      }
  
      // ISBN 13
      if (index == 13)
      {
          // checksum
          if (checksum == ((10 - (sum % 10)) % 10))
          {
              return true;
          }
      }
  
      return false;
  }
  

  onSubmit(isbn)
  {
    if (isbn.trim() == '')
    {
        alert("No ISBN input");
    }
    else
    {
        if (this.checkISBN(isbn))
        {
            alert("It is a valid ISBN");
        }
        else
        {
            alert("It is not a valid ISBN");
        }
    }
  }
}
