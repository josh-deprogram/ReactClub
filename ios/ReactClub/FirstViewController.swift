//
//  FirstViewController.swift
//  ReactClub
//
//  Created by josh.f on 16/4/19.
//  Copyright © 2019 deprogram. All rights reserved.
//

import UIKit
import React

class FirstViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        let reactViewWrapper: ReactNativeView = ReactNativeView(frame: self.view.frame)
        self.view.addSubview(reactViewWrapper)
    }
}



